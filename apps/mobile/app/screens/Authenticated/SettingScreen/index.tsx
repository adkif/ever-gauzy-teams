/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, Dimensions, TouchableWithoutFeedback, LogBox } from "react-native"
import Animated from "react-native-reanimated"
import BottomSheet from "reanimated-bottom-sheet"
import { BlurView } from "expo-blur"
import { ActivityIndicator } from "react-native-paper"

// COMPONENTS
import { Screen } from "../../../components"
import { AuthenticatedDrawerScreenProps } from "../../../navigators/AuthenticatedNavigator"
import SectionTab from "./components/SectionTab"
import SettingHeader from "./components/SettingHeader"
import { useSettings } from "../../../services/hooks/features/useSettings"
import BottomSheetContent from "./components/BottomSheetContent"
import PersonalSettings from "./Personal"
import TeamSettings from "./Team"
import { useAppTheme } from "../../../theme"
import FlashMessage from "react-native-flash-message"
import { useStores } from "../../../models"

export type IPopup =
	| "Names"
	| "Team Name"
	| "Contact"
	| "Language"
	| "TimeZone"
	| "Schedule"
	| "Remove Team"
	| "Avatar"
	| "Avatar 2"
	| "Team Logo"
	| "Quit Team"
	| "Delete Account"
	| "Remove Account"

export const AuthenticatedSettingScreen: FC<AuthenticatedDrawerScreenProps<"Setting">> =
	function AuthenticatedDrawerScreen(_props) {
		LogBox.ignoreAllLogs()
		const { colors } = useAppTheme()
		const { isLoading } = useSettings()
		const {
			teamStore: { isTeamsExist },
		} = useStores()

		// ref
		const sheetRef = React.useRef(null)

		// STATES
		const [activeTab, setActiveTab] = useState(1)
		const [isOpen, setIsOpen] = useState(false)
		const [showPopup, setShowPopup] = useState<IPopup>(null)

		const fall = new Animated.Value(1)

		const openBottomSheet = (name: IPopup, snapPoint: number) => {
			setShowPopup(name)
			setIsOpen(true)
			sheetRef.current.snapTo(snapPoint)
		}

		return (
			<Screen
				preset="fixed"
				contentContainerStyle={[$container, { backgroundColor: colors.background }]}
				safeAreaEdges={["top"]}
			>
				<View
					style={{
						flex: 1,
						zIndex: 100,
					}}
				>
					{isOpen && (
						<TouchableWithoutFeedback
							onPress={() => {
								setIsOpen(false)
								sheetRef.current.snapTo(2)
							}}
						>
							<BlurView tint="dark" intensity={25} style={$blurContainer} />
						</TouchableWithoutFeedback>
					)}

					<View style={[$headerContainer, { backgroundColor: colors.background }]}>
						<SettingHeader {..._props} />
						<SectionTab activeTabId={activeTab} toggleTab={setActiveTab} />
					</View>

					<View style={{ flex: 5 }}>
						{isLoading ? (
							<View
								style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}
							>
								<ActivityIndicator size={"small"} />
							</View>
						) : activeTab === 1 ? (
							<PersonalSettings onOpenBottomSheet={(sheet, snap) => openBottomSheet(sheet, snap)} />
						) : isTeamsExist ? (
							<TeamSettings props={{ ..._props }} onOpenBottomSheet={openBottomSheet} />
						) : null}
					</View>
				</View>

				<BottomSheet
					ref={sheetRef}
					snapPoints={[340, 174, 0, 611, 276, 335]}
					borderRadius={24}
					initialSnap={1}
					callbackNode={fall}
					enabledGestureInteraction={true}
					renderContent={() => (
						<View>
							<BottomSheetContent
								openedSheet={showPopup}
								onDismiss={() => {
									setIsOpen(false)
									sheetRef.current.snapTo(2)
								}}
								openBottomSheet={openBottomSheet}
							/>
						</View>
					)}
				/>
				<FlashMessage position="bottom" />
			</Screen>
		)
	}

const { height } = Dimensions.get("window")

const $container: ViewStyle = {
	flex: 1,
}

const $headerContainer: ViewStyle = {
	padding: 20,
	flex: 1,
	paddingBottom: 32,
	zIndex: 10,
}

const $blurContainer: ViewStyle = {
	flex: 1,
	height,
	width: "100%",
	position: "absolute",
	top: 0,
	zIndex: 1001,
}
