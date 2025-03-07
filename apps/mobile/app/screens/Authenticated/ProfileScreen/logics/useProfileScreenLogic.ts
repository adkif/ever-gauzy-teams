import { useCallback, useEffect, useMemo, useState } from "react"
import { useStores } from "../../../../models"
import { useAuthTeamTasks } from "../../../../services/hooks/features/useAuthTeamTasks"
import { useTeamTasks } from "../../../../services/hooks/features/useTeamTasks"
import { ITeamTask } from "../../../../services/interfaces/ITask"

export const useProfileScreenLogic = ({
	activeTab,
	userId,
}: {
	activeTab: "worked" | "assigned" | "unassigned"
	userId: string
}) => {
	const {
		TaskStore: { activeTask },
		authenticationStore: { user },
		teamStore: { activeTeam },
	} = useStores()
	const { updateTask, isRefetching } = useTeamTasks()

	const [showCreateTeamModal, setShowCreateTeamModal] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	const members = activeTeam?.members || []

	const matchUser = members.find((m) => {
		return m.employee.userId === userId
	})

	const isAuthUser = user?.employee.userId === userId

	const activeUserTeamTask = useMemo(
		() => (isAuthUser ? activeTask : matchUser?.lastWorkedTask),
		[userId, isRefetching],
	)

	const userProfile = isAuthUser ? user : matchUser?.employee.user

	const employeeId = isAuthUser ? user?.employee.id : matchUser?.employeeId

	/* Filtering the tasks */
	const tasksGrouped = useAuthTeamTasks(userProfile)

	useEffect(() => {
		if (employeeId) {
			// getTasksStatsData(employeeId)
		}
	}, [employeeId])

	const assignTask = useCallback(
		(task: ITeamTask) => {
			if (!matchUser?.employeeId) {
				return Promise.resolve()
			}

			return updateTask(
				{
					...task,
					members: [
						...task.members,
						(matchUser?.employeeId ? { id: matchUser?.employeeId } : {}) as any,
					],
				},
				task.id,
			)
		},
		[updateTask, matchUser],
	)

	const unassignTask = useCallback(
		(task: ITeamTask) => {
			if (!matchUser?.employeeId) {
				return Promise.resolve()
			}

			return updateTask(
				{
					...task,
					members: [...task.members.filter((member) => member.id !== matchUser?.employeeId)],
				},
				task.id,
			)
		},
		[updateTask, matchUser],
	)

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000)
	}, [])
	return {
		showCreateTeamModal,
		setShowCreateTeamModal,
		isAuthUser,
		activeUserTeamTask,
		userProfile,
		tasksGrouped,
		member: matchUser,
		assignTask,
		unassignTask,
		activeTab,
		isLoading,
	}
}

export type IUserProfile = ReturnType<typeof useProfileScreenLogic>
