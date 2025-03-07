import { useTeamTasks } from '@app/hooks';
import { ITaskStatus, ITaskSize, ITaskPriority, IVersionProperty } from '@app/interfaces';
import { detailedTaskState } from '@app/stores';
import {
	EpicPropertiesDropdown as TaskEpicDropdown,
	TaskLabelsDropdown,
	TaskPropertiesDropdown,
	TaskSizesDropdown,
	TaskStatusDropdown,
	VersionPropertiesDropown as TaskVersionDropdown,
} from 'lib/features';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import TaskRow from '../components/task-row';

const TaskSecondaryInfo = () => {
	const [task] = useRecoilState(detailedTaskState);

	const { handleStatusUpdate } = useTeamTasks();

	const handleChange = useCallback(
		(status: ITaskStatus) => {
			handleStatusUpdate(status, 'status', task);
		},
		[task, handleStatusUpdate]
	);

	const handleSizeChange = useCallback(
		(status: ITaskSize) => {
			handleStatusUpdate(status, 'size', task)
		},
		[task, handleStatusUpdate]
	);

	const handlePriorityChange = useCallback(
		(status: ITaskPriority) => {
			handleStatusUpdate(status, 'priority', task)
		},
		[task, handleStatusUpdate]
	);

	const handleVersionChange = useCallback(
		(status: IVersionProperty) => {
			handleStatusUpdate(status, 'version', task)
		},
		[task, handleStatusUpdate]
	)

	return (
		<section className="flex flex-col p-[15px]">
			<TaskRow labelTitle="Version" wrapperClassName="mb-3">
				<TaskVersionDropdown
					onValueChange={handleVersionChange}
					className="lg:min-w-[170px]"
					forDetails={true}
				/>
			</TaskRow>

			<TaskRow labelTitle="Epic" wrapperClassName="mb-3">
				<TaskEpicDropdown
					onValueChange={() => void 0}
					className="lg:min-w-[170px]"
					forDetails={true}
				/>
			</TaskRow>

			<TaskRow labelTitle="Status" wrapperClassName="mb-3">
				<TaskStatusDropdown
					defaultValue={task?.status}
					onValueChange={handleChange}
					className="lg:min-w-[170px]"
					forDetails={true}
				/>
			</TaskRow>

			<TaskRow labelTitle="Label" wrapperClassName="mb-3">
				<TaskLabelsDropdown
					defaultValue={task?.label}
					className="lg:min-w-[170px]"
					forDetails={true}
				/>
			</TaskRow>

			<TaskRow labelTitle="Size" wrapperClassName="mb-3">
				<TaskSizesDropdown
					defaultValue={task?.size}
					className="lg:min-w-[170px]"
					forDetails={true}
					onValueChange={handleSizeChange}
				/>
			</TaskRow>

			<TaskRow labelTitle="Priority" wrapperClassName="mb-3">
				<TaskPropertiesDropdown
					defaultValue={task?.priority}
					className="lg:min-w-[170px]"
					forDetails={true}
					onValueChange={handlePriorityChange}
				/>
			</TaskRow>
			<hr className="text-[#F2F2F2] mt-[15px]" />
		</section>
	);
};

export default TaskSecondaryInfo;
