/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react"
import moment from "moment-timezone"
import {
	View,
	Text,
	ViewStyle,
	Modal,
	StyleSheet,
	Animated,
	Dimensions,
	TouchableWithoutFeedback,
	Pressable,
	FlatList,
} from "react-native"
import { AntDesign, FontAwesome } from "@expo/vector-icons"

// COMPONENTS
import { translate } from "../../../../i18n"
import { typography, useAppTheme } from "../../../../theme"

export interface Props {
	visible: boolean
	onDismiss: () => unknown
	onTimezoneSelect: (s: string) => unknown
}

export interface IFilter {}

const { height } = Dimensions.get("window")
const ModalPopUp = ({ visible, children, onDismiss }) => {
	const [showModal, setShowModal] = React.useState(visible)
	const scaleValue = React.useRef(new Animated.Value(0)).current

	React.useEffect(() => {
		toggleModal()
	}, [visible])
	const toggleModal = () => {
		if (visible) {
			setShowModal(true)
			Animated.spring(scaleValue, {
				toValue: 1,
				useNativeDriver: true,
			}).start()
		} else {
			setTimeout(() => setShowModal(false), 200)
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start()
		}
	}
	return (
		<Modal animationType="fade" transparent visible={showModal}>
			<TouchableWithoutFeedback onPress={() => onDismiss()}>
				<View style={$modalBackGround}>
					<Animated.View style={{ transform: [{ scale: scaleValue }] }}>{children}</Animated.View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	)
}

const TimezonePopup: FC<Props> = function FilterPopup({ visible, onDismiss, onTimezoneSelect }) {
	const { colors, dark } = useAppTheme()
	const [timezones, setTimezones] = useState([])
	const [selectedTimezone, setSelectedTimezone] = useState("")

	useEffect(() => {
		setTimezones(moment.tz.names)
	}, [])

	const handleTimezoneSelect = (item: string) => {
		onTimezoneSelect(item)
		onDismiss()
	}

	return (
		<ModalPopUp visible={visible} onDismiss={onDismiss}>
			<TouchableWithoutFeedback>
				<View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
					<Text style={{ ...styles.mainTitle, color: colors.primary }}>
						{translate("settingScreen.changeTimezone.selectTimezoneTitle")}
					</Text>
					<FlatList
						style={styles.listContainer}
						bounces={false}
						data={timezones}
						keyExtractor={(item, index) => item.toString()}
						initialNumToRender={7}
						renderItem={({ item }) => (
							<Pressable
								style={{ ...styles.item, borderColor: colors.border }}
								onPress={() => handleTimezoneSelect(item)}
							>
								<Text style={{ ...styles.tzTitle, color: colors.primary }}>{item}</Text>
								{selectedTimezone === item ? (
									<AntDesign name="checkcircle" color={"#27AE60"} size={24} />
								) : (
									<FontAwesome
										name="circle-thin"
										size={24}
										olor={dark ? "" : "(40, 32, 72, 0.43)"}
									/>
								)}
							</Pressable>
						)}
					/>
				</View>
			</TouchableWithoutFeedback>
		</ModalPopUp>
	)
}

export default TimezonePopup

const $modalBackGround: ViewStyle = {
	flex: 1,
	backgroundColor: "#000000AA",
	justifyContent: "center",
}

const styles = StyleSheet.create({
	buttonText: {
		color: "#FFF",
		fontFamily: typography.primary.semiBold,
		fontSize: 18,
	},
	item: {
		alignItems: "center",
		borderColor: "rgba(0,0,0,0.13)",
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: "row",
		height: 42,
		justifyContent: "space-between",
		marginBottom: 10,
		paddingHorizontal: 16,
		width: "100%",
	},
	listContainer: {
		marginVertical: 16,
		paddingHorizontal: 20,
		width: "100%",
	},
	mainContainer: {
		alignSelf: "center",
		backgroundColor: "yellow",
		borderColor: "#1B005D0D",
		borderRadius: 24,
		borderTopRightRadius: 24,
		borderWidth: 2,
		height: height / 2,
		paddingVertical: 16,
		shadowColor: "#1B005D0D",
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 10,
		width: "90%",
		zIndex: 1000,
	},
	mainTitle: {
		fontFamily: typography.primary.semiBold,
		fontSize: 24,
		marginBottom: 10,
		paddingHorizontal: 20,
	},
	statusContainer: {
		height: 57,
		paddingHorizontal: 16,
		paddingVertical: 10,
		width: 156,
		zIndex: 1000,
	},
	tzTitle: {
		fontFamily: typography.primary.semiBold,
		fontSize: 14,
	},
	wrapForm: {
		marginTop: 16,
		width: "100%",
		zIndex: 100,
	},
})
