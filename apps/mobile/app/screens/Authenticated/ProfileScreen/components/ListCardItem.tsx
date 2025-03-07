/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { View, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Ionicons, Entypo } from "@expo/vector-icons"
import { Card, Text } from "react-native-paper"
import { LinearGradient } from "expo-linear-gradient"
import { AnimatedCircularProgress } from "react-native-circular-progress"

// COMPONENTS
import { ListItem } from "../../../../components"
import { GLOBAL_STYLE as GS } from "../../../../../assets/ts/styles"
import { spacing, typography, useAppTheme } from "../../../../theme"
import { ITeamTask } from "../../../../services/interfaces/ITask"
import WorkedOnTask from "../../../../components/WorkedOnTask"
import TaskStatus from "../../../../components/TaskStatus"
import TimerButton from "./TimerButton"
import { observer } from "mobx-react-lite"
import { IUserProfile } from "../logics/useProfileScreenLogic"
import TaskTitleDisplay from "./TaskTitleDisplay"
import AllTaskStatuses from "../../../../components/AllTaskStatuses"
import WorkedOnTaskHours from "../../../../components/WorkedDayHours"
import EstimateTime from "../../TimerScreen/components/EstimateTime"
import { secondsToTime } from "../../../../helpers/date"

export type ListItemProps = {
	active?: boolean
	task?: ITeamTask
	isAssigned?: boolean
	isAuthUser: boolean
	activeAuthTask: boolean
	viewType?: "default" | "unassign"
	profile?: IUserProfile
}

export interface Props extends ListItemProps {}

export const ListItemContent: React.FC<ListItemProps> = observer((props) => {
	const { colors } = useAppTheme()

	const [editTitle, setEditTitle] = useState(false)
	const [enableEstimate, setEnableEstimate] = useState(false)
	const [showMenu, setShowMenu] = React.useState(false)

	const { h } = secondsToTime(props.task.estimate || 0)

	return (
		<TouchableNativeFeedback
			onPressIn={() => {
				setShowMenu(false)
				setEditTitle(false)
				setEnableEstimate(false)
			}}
		>
			<View
				style={{
					...GS.p3,
					...GS.positionRelative,
					backgroundColor: colors.background,
					borderRadius: 14,
				}}
			>
				<View style={styles.firstContainer}>
					<WorkedOnTask
						memberTask={props.task}
						isAuthUser={props.profile.isAuthUser}
						isActiveTask={props.activeAuthTask}
						title={"Total time"}
						containerStyle={{ flexDirection: "row", alignItems: "center" }}
						totalTimeText={{ color: colors.primary }}
					/>
					<TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
						{!showMenu ? (
							<Ionicons name="ellipsis-vertical-outline" size={20} color={colors.primary} />
						) : (
							<Entypo name="cross" size={20} color={colors.primary} />
						)}
					</TouchableOpacity>
				</View>

				<View style={{ marginBottom: 16 }}>
					<View style={styles.wrapperTask}>
						<TaskTitleDisplay task={props.task} editMode={editTitle} setEditMode={setEditTitle} />
						{!enableEstimate ? (
							<TouchableOpacity onLongPress={() => setEnableEstimate(true)}>
								<AnimatedCircularProgress
									size={56}
									width={7}
									fill={50}
									tintColor="#27AE60"
									backgroundColor="#F0F0F0"
								>
									{() => <Text style={{ ...styles.progessText, color: colors.primary }}>{h}H</Text>}
								</AnimatedCircularProgress>
							</TouchableOpacity>
						) : (
							<EstimateTime setEditEstimate={setEnableEstimate} currentTask={props.task} />
						)}
					</View>
					<AllTaskStatuses task={props.task} />
				</View>
				<View style={[styles.times, { borderTopColor: colors.border }]}>
					<View style={styles.wrapButton}>
						{props.isAuthUser && (
							<TimerButton isActiveTask={props.activeAuthTask} task={props.task} />
						)}
						{!props.isAssigned && !props.isAuthUser && (
							<TouchableOpacity
								style={[styles.timerBtn, { backgroundColor: "#fff" }]}
								onPress={() => props.profile.assignTask(props.task)}
							>
								<Image
									resizeMode="contain"
									style={styles.timerIcon}
									source={require("../../../../../assets/icons/new/arrow-right.png")}
								/>
							</TouchableOpacity>
						)}
						{props.isAssigned ? (
							<WorkedOnTaskHours
								memberTask={props.task}
								title={"Today Work"}
								containerStyle={{ alignItems: "center" }}
								totalTimeText={{ color: colors.primary }}
							/>
						) : (
							<View style={{ left: 12, justifyContent: "center", alignItems: "center" }}>
								<Text style={[styles.timeHeading, { color: colors.tertiary }]}>Assigned</Text>
								<Text style={[styles.timeNumber, { color: colors.primary }]}>
									{props.task.members.length} people
								</Text>
							</View>
						)}
					</View>
					<TaskStatus containerStyle={styles.statusContainer} task={props.task} />
				</View>
				{showMenu && (
					<SidePopUp
						setEditTitle={setEditTitle}
						setShowMenu={() => setShowMenu(false)}
						setEnableEstimate={setEnableEstimate}
						props={props}
					/>
				)}
			</View>
		</TouchableNativeFeedback>
	)
})

interface IMenuProps {
	setShowMenu: () => unknown
	setEditTitle: (value: boolean) => unknown
	setEnableEstimate: (value: boolean) => unknown
	props: ListItemProps
}
const SidePopUp: FC<IMenuProps> = ({ props, setShowMenu, setEditTitle, setEnableEstimate }) => {
	const { colors } = useAppTheme()
	const { isAssigned, task, profile } = props
	return (
		<View
			style={{
				...GS.positionAbsolute,
				...GS.p2,
				...GS.mt1,
				...GS.pt1,
				...GS.shadow,
				...GS.r0,
				...GS.rounded,
				...GS.border,
				borderColor: colors.border,
				...GS.zIndexFront,
				width: 120,
				shadowColor: colors.border,
				marginRight: 27,
				backgroundColor: colors.background,
				minWidth: spacing.huge * 2,
			}}
		>
			<View style={{}}>
				<ListItem
					textStyle={[styles.dropdownTxt, { color: colors.primary }]}
					onPress={() => {
						setEditTitle(true)
						setShowMenu()
					}}
				>
					Edit Task
				</ListItem>
				<ListItem
					textStyle={[styles.dropdownTxt, { color: colors.primary }]}
					onPress={() => {
						setEnableEstimate(true)
						setShowMenu()
					}}
				>
					Estimate
				</ListItem>

				{!isAssigned && (
					<ListItem
						textStyle={[styles.dropdownTxt, { color: colors.primary }]}
						onPress={() => {
							profile.assignTask(task)
							setShowMenu()
						}}
					>
						Assign Task
					</ListItem>
				)}

				{isAssigned && (
					<ListItem
						textStyle={[styles.dropdownTxt, { color: colors.primary }]}
						onPress={() => {
							profile.unassignTask(task)
							setShowMenu()
						}}
					>
						Unassign Task
					</ListItem>
				)}
			</View>
		</View>
	)
}

const ListCardItem: React.FC<Props> = (props) => {
	const { colors, dark } = useAppTheme()
	// STATS

	const { activeAuthTask } = props

	return (
		<Card
			style={[
				{ borderRadius: 14, ...GS.shadow },
				!dark && activeAuthTask && { borderColor: "#8C7AE4", borderWidth: 3 },
			]}
		>
			{dark ? (
				<LinearGradient
					colors={["#B993E6", "#6EB0EC", "#5855D8"]}
					start={{ x: 0.1, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					style={{ padding: activeAuthTask ? 3 : 0, borderRadius: 14 }}
				>
					<View style={{ backgroundColor: colors.background, borderRadius: 14 }}>
						<ListItemContent {...props} />
					</View>
				</LinearGradient>
			) : (
				<View style={{ backgroundColor: colors.background, borderRadius: 14 }}>
					<ListItemContent {...props} />
				</View>
			)}
		</Card>
	)
}

export default ListCardItem

const styles = StyleSheet.create({
	dropdownTxt: {
		color: "#282048",
		fontFamily: typography.primary.semiBold,
		fontSize: 14,
	},
	firstContainer: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	progessText: {
		fontFamily: typography.primary.semiBold,
		fontSize: 12,
	},
	statusContainer: {
		alignItems: "center",
		borderColor: "transparent",
		height: 33,
		paddingHorizontal: 9,
		width: 120,
	},
	timeHeading: {
		color: "#7E7991",
		fontFamily: typography.fonts.PlusJakartaSans.medium,
		fontSize: 10,
	},
	timeNumber: {
		color: "#282048",
		fontFamily: typography.fonts.PlusJakartaSans.semiBold,
		fontSize: 14,
	},
	timerBtn: {
		alignItems: "center",
		borderColor: "rgba(0, 0, 0, 0.4)",
		borderRadius: 20,
		borderWidth: 1,
		elevation: 10,
		height: 42,
		justifyContent: "center",
		marginRight: 10,
		shadowColor: "rgba(0,0,0,0.16)",
		shadowOffset: { width: 5, height: 10 },
		shadowOpacity: 1,
		shadowRadius: 10,
		width: 42,
	},
	timerIcon: {
		height: 21,
		width: 21,
	},
	times: {
		alignItems: "center",
		borderTopColor: "rgba(0, 0, 0, 0.06)",
		borderTopWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 14,
	},
	wrapButton: {
		alignItems: "center",
		flexDirection: "row",
	},
	wrapperTask: {
		alignItems: "center",
		flexDirection: "row",
		height: 42,
		justifyContent: "space-between",
		paddingRight: 10,
	},
})
