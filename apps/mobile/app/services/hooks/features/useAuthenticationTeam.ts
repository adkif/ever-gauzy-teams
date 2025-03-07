import { useCallback, useEffect, useRef, useState } from "react"
import { TextInput } from "react-native"
import { useStores } from "../../../models"
import { login } from "../../client/api/auth/login"
import { register } from "../../client/api/auth/register"
import sendAuthCode from "../../client/api/auth/sendAuthCode"
import {
	resentVerifyUserLinkRequest,
	verifyUserEmailByCodeRequest,
} from "../../client/requests/auth"
import { useFirstLoad } from "../useFirstLoad"

export function useAuthenticationTeam() {
	const authTeamInput = useRef<TextInput>()
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [joinError, setJoinError] = useState(null)
	const [verificationError, setVerificationError] = useState(null)
	const [screenstatus, setScreenStatus] = useState<{ screen: number; animation: boolean }>({
		screen: 1,
		animation: false,
	})
	const [withteam, setWithTeam] = useState<boolean>(false)
	const [attemptsCount, setAttemptsCount] = useState(0)

	const {
		authenticationStore: {
			authEmail,
			authTeamName,
			authUsername,
			authInviteCode,
			authConfirmCode,
			setAuthEmail,
			setAuthTeamName,
			setAuthUsername,
			setAuthToken,
			setAuthConfirmCode,
			setAuthInviteCode,
			validationErrors,
			setTempAuthToken,
			tempAuthToken,
			setOrganizationId,
			tenantId,
			setUser,
			setTenantId,
			setEmployeeId,
			setRefreshToken,
		},
		teamStore: { setActiveTeam, setActiveTeamId },
	} = useStores()

	const { firstLoadData } = useFirstLoad()

	const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

	/**
	 * Join an existing team
	 */
	const joinTeam = async () => {
		setIsSubmitted(true)
		setAttemptsCount(attemptsCount + 1)

		setIsLoading(true)

		await login({ email: authEmail, code: authInviteCode })
			.then((res) => {
				const { response, errors, status } = res

				if (status === 200) {
					const loginRes = response.data.authStoreData
					const user = response.data.loginResponse.user
					const noTeam = response.data.noTeam
					setUser(user)
					setEmployeeId(user.employee.id)
					const team = response.data.team

					// Check if team is not null
					if (!noTeam) {
						setActiveTeamId(team.id)
						setActiveTeam(team)
					}

					// Save Auth Token
					setTenantId(user.tenantId)
					setOrganizationId(user.employee.organizationId)
					setAuthToken(loginRes.access_token)
					setRefreshToken(loginRes.refresh_token.token)
					setIsLoading(false)

					// Reset all fields
					setIsSubmitted(false)
					setAuthTeamName("")
					setAuthEmail("")
					setAuthInviteCode("")
					setAuthUsername("")
					setAuthConfirmCode("")
					setAuthTeamName("")
					setAuthEmail("")
					setAuthUsername("")
					setAuthInviteCode("")
					setAuthConfirmCode("")
				} else {
					if (errors) {
						setJoinError(errors.email)
						setIsLoading(false)
						setIsSubmitted(false)
					}
				}
			})
			.catch((e) => {
				setIsLoading(false)
				setIsSubmitted(false)
				console.log(e)
			})
	}

	/**
	 *
	 * Register or Create New Team
	 */
	const createNewTeam = async () => {
		setIsSubmitted(true)
		setAttemptsCount(attemptsCount + 1)

		if (Object.values(validationErrors).some((v) => !!v)) return

		setIsLoading(true)
		// Make a request to your server to get an authentication token.
		await register({
			team: authTeamName,
			name: authUsername,
			email: authEmail,
		})
			.then((res) => {
				const { response } = res

				// If successful, reset the fields and set the token.
				if (response.status === 200) {
					const data = response.data

					const employee = data.employee
					const loginRes = data.loginRes

					setActiveTeamId(data.team.id)
					setActiveTeam(data.team)
					setOrganizationId(data.team.organizationId)
					setUser(loginRes.user)
					setTenantId(data.team.tenantId)
					setEmployeeId(employee.id)

					firstLoadData()
					// Save Auth Data
					setTempAuthToken(loginRes.token)
					setRefreshToken(loginRes.refresh_token)
					setScreenStatus({
						screen: 3,
						animation: true,
					})

					setIsLoading(false)
					setIsSubmitted(false)
				}
			})
			.catch((e) => {
				setIsLoading(false)
				setIsSubmitted(false)
				console.log(e)
			})
	}

	/**
	 * Generate authentication code for login
	 */
	const getAuthCode = useCallback(async () => {
		setIsSubmitted(true)
		setIsLoading(true)
		await sendAuthCode(authEmail).catch((e) => console.log(e))
		setIsSubmitted(false)
		setIsLoading(false)
	}, [authEmail])

	/**
	 * Verify User Email by Verification Code
	 */
	const verifyEmailByCode = async () => {
		setIsLoading(true)
		await verifyUserEmailByCodeRequest({
			bearer_token: tempAuthToken,
			code: parseInt(authConfirmCode),
			email: authEmail,
			tenantId,
		})
			.then((res) => {
				const { data } = res
				if (data.status === 400) {
					setVerificationError(data.message)
					return
				}

				if (data.status === 200) {
					setAuthToken(tempAuthToken)
					setAuthTeamName("")
					setAuthEmail("")
					setAuthUsername("")
					setAuthInviteCode("")
					setAuthConfirmCode("")
				}
				setIsLoading(false)
			})
			.catch((e) => {
				setIsLoading(false)
				console.log(e)
			})
	}

	/**
	 * Resend Email Verification Code
	 */
	const resendEmailVerificationCode = async () => {
		setIsLoading(true)
		await resentVerifyUserLinkRequest({
			bearer_token: tempAuthToken,
			email: authEmail,
			tenantId,
		})
		setIsLoading(false)
	}

	useEffect(() => {
		return () => {
			setIsSubmitted(false)
			setAuthTeamName("")
			setAuthEmail("")
			setAuthUsername("")
			setAuthInviteCode("")
			setAuthConfirmCode("")
			setVerificationError(null)
			setJoinError(null)
		}
	}, [])

	return {
		resendEmailVerificationCode,
		joinError,
		joinTeam,
		createNewTeam,
		verificationError,
		verifyEmailByCode,
		getAuthCode,
		errors,
		isLoading,
		withteam,
		setWithTeam,
		screenstatus,
		setScreenStatus,
		authTeamInput,
	}
}
