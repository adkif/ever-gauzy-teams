import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Icon, Text } from "../../../../components";
import { colors, spacing } from "../../../../theme"
import { GLOBAL_STYLE as GS, CONSTANT_COLOR as CC } from "../../../../../assets/ts/styles"
import { useStores } from "../../../../models";
import { ITaskStatus, ITeamTask } from "../../../../services/interfaces/ITask";
import { Feather } from "@expo/vector-icons"
import { BadgedTaskStatus, getBackground, StatusIcon } from "../../../../components/StatusIcon";

const TaskStatus = (currentTask: ITeamTask) => {
  const {
    authenticationStore: { authToken, organizationId, tenantId },
    TaskStore: { activeTask, updateTask },
    teamStore: { activeTeamId }
  } = useStores();
  const [showTaskStatus, setShowTaskStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ITaskStatus>(currentTask.status)
  const status: ITaskStatus[] = [
    "Todo",
    "In Progress",
    "In Review",
    "For Testing",
    "Unassigned",
    "Completed",
    "Closed"]

  const onChangeStatus = (text) => {
    const value: ITaskStatus = text;
    const task = {
      ...currentTask,
      status: value
    };
    const refreshData = {
      activeTeamId,
      tenantId,
      organizationId
    }
    updateTask({ taskData: task, taskId: task.id, authToken, refreshData });
  }


  return (
    <>
      <View style={{ width: 150 }}>
        <TouchableOpacity onPress={() => setShowTaskStatus(!showTaskStatus)} style={{ flexDirection: 'row', backgroundColor: getBackground({status:selectedStatus}), padding: 5, width: 150, justifyContent: 'space-between', borderRadius: 5 }}>
          <BadgedTaskStatus showColor={true} status={selectedStatus} />
          <Image source={require("../../../../../assets/icons/caretDown.png")} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          ...GS.positionAbsolute,
          ...GS.p2,
          ...GS.shadow,
          ...GS.r0,
          ...GS.roundedSm,
          marginTop: -(spacing.massive + 15),
          marginRight: spacing.small,
          backgroundColor: colors.background,
          minWidth: spacing.massive * 2.5,
          ...(!showTaskStatus ? { display: "none" } : {}),
        }}
      >
        <View style={{}}>
          {status.map((item, idx) => (
            <TouchableOpacity style={{ marginBottom: 2 }} key={idx} onPress={() => {
              onChangeStatus(item)
              setSelectedStatus(item)
              setShowTaskStatus(false)
            }}>
              <BadgedTaskStatus showColor={false} status={item} />
            </TouchableOpacity>
          ))}

        </View>

        <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5 }} onPress={() => setShowTaskStatus(!showTaskStatus)}>
          <Icon icon={"x"} />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default TaskStatus;