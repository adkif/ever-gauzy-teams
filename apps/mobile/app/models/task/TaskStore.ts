import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { IFilter } from "../../screens/Authenticated/ProfileScreen/components/FilterPopup";
import { h_filter } from "../../screens/Authenticated/TimerScreen/components/ComboBox";
import { ITeamTask, ITaskStatus } from "../../services/interfaces/ITask";

export const TaskStoreModel = types
    .model("TaskStore")
    .props({
        teamTasks: types.array(types.frozen<ITeamTask>()),
        activeTask: types.optional(types.frozen(), { status: "Todo" }),
        activeTaskId: types.optional(types.string, ""),
        assignedTasks: types.array(types.frozen<ITeamTask>()),
        unassignedTasks: types.array(types.frozen<ITeamTask>()),
        fetchingTasks: types.optional(types.boolean, false),
        tasksStatisticsState: types.optional(types.frozen(), null),
        statActiveTask: types.optional(types.frozen(), { total: 0, today: 0 }),
        filter: types.optional(types.frozen(), { statuses: [], sizes: [], priorities: [], labels: [], apply: false })
    })
    .views((store) => ({

    }))
    .actions((store) => ({

        setAssignedTasks(value: any) {
            store.assignedTasks = value
        },

        setUnassignedTasks(value: any) {
            store.unassignedTasks = value
        },

        setActiveTask(task: any) {
            store.activeTask = task;
        },
        setActiveTaskId(id: string) {
            store.activeTaskId = id;
        },
        setTasksStatisticsState(stats: any) {
            store.tasksStatisticsState = stats
        },
        setStatActiveTask(stats: any) {
            store.statActiveTask = stats
        },
        setFilter(filter: IFilter) {
            store.filter = filter
        },
        setTeamTasks(tasks: any) {
            store.teamTasks = tasks
        },
        setFetchingTasks(value: boolean) {
            store.fetchingTasks = value
        },
        filterDataByStatus(query, tasks: ITeamTask[], filter) {
            return query.trim() === ""
                ? tasks.filter((task) => h_filter(task.status, filter))
                : tasks.filter(
                    (task) =>
                        task.title
                            .trim()
                            .toLowerCase()
                            .replace(/\s+/g, "")
                            .startsWith(query.toLowerCase().replace(/\s+/g, "")) &&
                        h_filter(task.status, filter)
                );
        },
        resetTeamTasksData() {
            store.activeTask = {}
            store.activeTaskId = ""
            store.teamTasks.clear()
        }

    }))

export interface TeamStore extends Instance<typeof TaskStoreModel> { }
export interface TeamStoreSnapshot extends SnapshotOut<typeof TaskStoreModel> { }

