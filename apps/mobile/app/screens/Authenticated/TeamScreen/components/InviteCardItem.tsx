import React, { useEffect, useState } from "react"
import {
    View,
    ViewStyle,
    ImageStyle,
    TouchableOpacity,
    StyleSheet,
} from "react-native"
import { Avatar, Text } from "react-native-paper"
import { Ionicons, Entypo } from "@expo/vector-icons"

// COMPONENTS
import { Card, Icon, ListItem } from "../../../../components"

// STYLES
import { GLOBAL_STYLE as GS, CONSTANT_COLOR as CC } from "../../../../../assets/ts/styles"
import { spacing, typography } from "../../../../theme"
import ProgressTimeIndicator from "./ProgressTimeIndicator"
import { observer } from "mobx-react-lite"
import { useOrganizationTeam } from "../../../../services/hooks/useOrganization"
import { translate } from "../../../../i18n"
import { useAppTheme } from "../../../../app"


export type ListItemProps = {
    invite: any,
}
interface IUserStatus {
    icon: any,
    color: string
}

export interface Props extends ListItemProps { }

export const ListItemContent: React.FC<ListItemProps> = observer(({ invite }) => {
    // HOOKS

    const { colors } = useAppTheme();

    return (

        <TouchableOpacity onPress={() => { }}>
            <View style={[{ ...GS.p3, ...GS.positionRelative, backgroundColor: colors.background,borderRadius: 10,opacity:0.77  }]}>
                    <View style={styles.firstContainer}>
                        <View style={styles.wrapProfileImg}>
                            <Avatar.Text size={40} label={"EM"} />
                            <Avatar.Image style={styles.statusIcon} size={20} source={require("../../../../../assets/icons/new/invite-status-icon.png")} />
                        </View>
                        <Text style={[styles.name, { color: colors.primary }]}>{invite.fullName}</Text>
                        {/* ENABLE ESTIMATE INPUTS */}
                        <View style={styles.wrapTotalTime}>
                            <View style={{ ...GS.alignCenter, height: "80%", justifyContent: "space-between" }}>
                                <Text style={styles.totalTimeTitle}>{translate("teamScreen.cardTotalTimeLabel")}</Text>
                                <Text style={[styles.totalTimeText, { color: colors.primary, fontSize: 14 }]}>20 h:30 m</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.wrapTaskTitle, { borderTopColor: colors.divider }]}>
                        <Text style={[styles.otherText, { color: colors.primary }]}>
                            {/* {memberTask ? memberTask.title : ""} */}
                            Working on UI Design & making prototype for user testing tomorrow
                        </Text>
                    </View>
                    <View style={[styles.times, { borderTopColor: colors.divider }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 48, width: "100%" }}>
                            <View style={{ ...GS.alignCenter, height: "80%", justifyContent: "space-between" }}>
                                <Text style={styles.totalTimeTitle}>{translate("teamScreen.cardTodayWorkLabel")}</Text>
                                <Text style={[styles.totalTimeText, { color: colors.primary, fontSize: 14 }]}>20 h:30 m</Text>
                            </View>
                            <View style={{ ...GS.alignCenter }}>
                                <View style={{ ...GS.alignCenter, height: "80%", justifyContent: "space-between" }}>
                                    <Text style={styles.totalTimeTitle}>{translate("teamScreen.cardTotalWorkLabel")}</Text>
                                    <Text style={[styles.totalTimeText, { color: colors.primary, fontSize: 14 }]}>20 h:30 m</Text>
                                </View>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => { }}>
                                    <View style={{}}>
                                        <ProgressTimeIndicator
                                            estimatedHours={0}
                                            workedHours={0}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                
            </View>
        </TouchableOpacity >

    )
})

const ListCardItem: React.FC<Props> = (props) => {
    const { colors } = useAppTheme();
    const { isTeamManager } = useOrganizationTeam();
    // STATS
    const [showMenu, setShowMenu] = React.useState(false)
    const [estimateNow, setEstimateNow] = React.useState(false)

    const handleEstimate = () => {
        setEstimateNow(true)
        setShowMenu(false)
    }

    return (
        <Card
            style={{
                ...$listCard,
                ...GS.mb3,
                paddingTop: 4,
                backgroundColor: "#DCD6D6",
                opacity:0.38
            }}
            HeadingComponent={
                <View
                    style={{
                        ...GS.positionAbsolute,
                        ...GS.t0,
                        ...GS.r0,
                        ...GS.pt5,
                        ...GS.pr3,
                        ...GS.zIndexFront,
                        opacity:0.47
                    }}
                >
                    <View
                        style={{
                            ...GS.positionRelative,
                            backgroundColor: colors.background,
                            ...GS.zIndexFront,
                            opacity:0.47
                        }}
                    >
                        <View
                            style={{
                                ...GS.positionAbsolute,
                                ...GS.p2,
                                ...GS.pt1,
                                ...GS.shadow,
                                ...GS.r0,
                                ...GS.roundedSm,
                                ...GS.zIndexFront,
                                opacity:0.47,
                                width: 172,
                                marginTop: -spacing.extraSmall,
                                marginRight: 17,
                                backgroundColor: colors.background,
                                minWidth: spacing.huge * 2,
                                ...(!showMenu ? { display: "none" } : {}),
                            }}
                        >
                            <View style={{}}>
                                <ListItem textStyle={[styles.dropdownTxt, { color: colors.primary }]}>Edit Task</ListItem>
                                <ListItem textStyle={[styles.dropdownTxt, { color: colors.primary }]} onPress={() => handleEstimate()}>Estimate</ListItem>
                                <ListItem textStyle={[styles.dropdownTxt, { color: colors.primary }]}>Assign Task</ListItem>
                                <ListItem textStyle={[styles.dropdownTxt, { color: colors.primary }]}>Unassign Task</ListItem>
                                {isTeamManager ? (
                                    <>
                                        <ListItem textStyle={[styles.dropdownTxt, { color: colors.primary }]}>Make a Manager</ListItem>
                                        <ListItem textStyle={[styles.dropdownTxt, { color: "#DE5536" }]} style={{}}>Remove</ListItem>
                                    </>
                                ) : null}
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
                            {!showMenu ?
                                <Ionicons name="ellipsis-vertical-outline" size={24} color={colors.primary} />
                                :
                                <Entypo name="cross" size={24} color={colors.primary} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            }
            ContentComponent={

                <ListItemContent
                    {...props}
                />
            }
        />

    )
}

export default ListCardItem

const $listCard: ViewStyle = {
    ...GS.flex1,
    ...GS.p0,
    ...GS.noBorder,
    // ...GS.shadow,
    shadowOffset: { width: 0, height: 15 },
    minHeight: null,
    borderRadius: 14,
}


const styles = StyleSheet.create({
    mainContainer: {
        borderColor: "#1B005D",
        borderWidth: 0.5,
        borderRadius: 20,
        height: 180,
        justifyContent: "space-around",
        padding: 10,
    },
    times: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 16,
        borderTopWidth: 1,
    },
    otherText: {
        fontSize: 14,
        color: "#282048",
        width: "100%",
        lineHeight: 15,
        fontStyle: "normal",
        fontFamily: typography.fonts.PlusJakartaSans.semiBold,
    },
    timeNumber: {
        color: "#282048",
        fontSize: 14,
        fontFamily: typography.fonts.PlusJakartaSans.semiBold
    },
    timeHeading: {
        color: "#7E7991",
        fontSize: 10,
        fontFamily: typography.fonts.PlusJakartaSans.medium
    },
    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        color: "#1B005D",
        fontSize: 12,
        left: 15,
        fontFamily: typography.fonts.PlusJakartaSans.semiBold
    },
    estimate: {
        backgroundColor: "#E8EBF8",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 2,
        alignItems: "center",
        borderRadius: 5,
        marginLeft: "auto",
        marginRight: 10,
    },
    taskNumberStyle: {

    },
    wrapTotalTime: {
        position: "absolute",
        right: 0,
        marginRight: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    totalTimeTitle: {
        fontSize: 10,
        fontFamily: typography.fonts.PlusJakartaSans.medium,
        fontWeight: "500",
        marginBottom: 9,
        color: "#7E7991",
    },
    totalTimeText: {
        fontSize: 12,
        color: "#282048",
        fontFamily: typography.fonts.PlusJakartaSans.semiBold
    },
    wrapProfileImg: {
        flexDirection: "row"
    },
    statusIcon: {
        position: "absolute",
        bottom: 0,
        right: -4
    },
    dropdownTxt: {
        color: "#282048",
        fontSize: 14,
        fontFamily: typography.primary.semiBold
    },
    wrapTaskTitle: {
        flexDirection: 'row',
        marginTop: 16,
        width: "100%",
        borderTopWidth: 1,
        paddingVertical: 16
    }
})