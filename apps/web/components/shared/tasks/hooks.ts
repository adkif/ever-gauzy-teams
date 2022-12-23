import { useTeamTasks } from '@app/hooks/features/useTeamTasks';
import { ITaskStatus, ITeamTask } from '@app/interfaces/ITask';
import { useCallback, useMemo, useState } from 'react';

export const h_filter = (status: ITaskStatus, filters: 'closed' | 'open') => {
	switch (filters) {
		case 'open':
			return status !== 'Closed';
		case 'closed':
			return status === 'Closed';
		default:
			return true;
	}
};

export function useTaskInput() {
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [closeableTask, setCloseableTaskTask] = useState<ITeamTask | null>(
		null
	);
	const {
		tasks,
		activeTeamTask,
		setActiveTask,
		createLoading,
		tasksFetching,
		updateLoading,
		createTask,
		updateTask,
	} = useTeamTasks();
	const [filter, setFilter] = useState<'closed' | 'open'>('open');
	const [editMode, setEditMode] = useState(false);

	const handleOpenModal = useCallback(
		(concernedTask: ITeamTask) => {
			setCloseableTaskTask(concernedTask);
			openModal();
		},
		[setCloseableTaskTask, openModal]
	);

	const handleReopenTask = useCallback(
		async (concernedTask: ITeamTask) => {
			if (concernedTask) {
				return updateTask({
					...concernedTask,
					status: 'Todo',
				});
			}
		},
		[updateTask]
	);

	const [query, setQuery] = useState('');

	const filteredTasks = useMemo(() => {
		return query.trim() === ''
			? tasks.filter((task) => h_filter(task.status, filter))
			: tasks.filter(
					(task) =>
						task.title
							.trim()
							.toLowerCase()
							.replace(/\s+/g, '')
							.startsWith(query.toLowerCase().replace(/\s+/g, '')) &&
						h_filter(task.status, filter)
				);
	}, [query, tasks, filter]);

	const filteredTasks2 = useMemo(() => {
		return query.trim() === ''
			? tasks
			: tasks.filter((task) => {
					return task.title
						.trim()
						.toLowerCase()
						.replace(/\s+/g, '')
						.startsWith(query.toLowerCase().replace(/\s+/g, ''));
				});
	}, [query, tasks]);

	const hasCreateForm = filteredTasks2.length === 0 && query !== '';

	const handleTaskCreation = (autoActiveTask = true) => {
		if (query.trim().length < 2 || activeTeamTask?.title === query.trim())
			return;
		createTask(query.trim()).then((res) => {
			setQuery('');
			const items = res.data?.items || [];
			const created = items.find((t) => t.title === query.trim());
			if (created && autoActiveTask) setActiveTask(created);
		});
	};

	const closedTaskCount = filteredTasks2.filter((f_task) => {
		return f_task.status === 'Closed';
	}).length;

	const openTaskCount = filteredTasks2.filter((f_task) => {
		return f_task.status !== 'Closed';
	}).length;

	return {
		closedTaskCount,
		openTaskCount,
		hasCreateForm,
		handleTaskCreation,
		filteredTasks,
		handleReopenTask,
		handleOpenModal,
		createLoading,
		tasksFetching,
		updateLoading,
		setFilter,
		closeModal,
		isModalOpen,
		closeableTask,
		editMode,
		setEditMode,
		activeTeamTask,
		setActiveTask,
		setQuery,
		filter,
	};
}

export function useModal() {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	return {
		isOpen,
		closeModal,
		openModal,
	};
}
