import {
	IClassName,
	ITaskStatusField,
	ITaskStatusItemList,
	ITaskStatusStack,
	ITeamTask,
	IVersionProperty,
	Nullable,
	Tag,
} from '@app/interfaces';
import { clsxm } from '@app/utils';
import { Listbox, Transition } from '@headlessui/react';
import { Card, Tooltip } from 'lib/components';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { LoginIcon, RecordIcon } from 'lib/components/svgs';
import React, {
	Fragment,
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	useCallbackRef,
	useSyncRef,
	useTaskLabels,
	useTaskPriorities,
	useTaskSizes,
	useTaskStatus,
	useTeamTasks,
} from '@app/hooks';
import clsx from 'clsx';
import Image from 'next/legacy/image';
import capitalize from 'lodash/capitalize';

export type TStatusItem = {
	bgColor?: string;
	icon?: React.ReactNode | undefined;
	name?: string;
	value?: string;
	bordered?: boolean;
};

export type TStatus<T extends string> = {
	[k in T]: TStatusItem;
};

export type TTaskStatusesDropdown<T extends ITaskStatusField> = IClassName & {
	defaultValue?: ITaskStatusStack[T];
	onValueChange?: (
		v: ITaskStatusStack[T],
		values?: ITaskStatusStack[T][]
	) => void;
	forDetails?: boolean;
	dynamicValues?: any[];
	multiple?: boolean;
	disabled?: boolean;
};

export type TTaskVersionsDropdown<T extends ITaskStatusField> = IClassName & {
	defaultValue?: ITaskStatusStack[T];
	onValueChange?: (v: ITaskStatusStack[T]) => void;
};

export type IActiveTaskStatuses<T extends ITaskStatusField> =
	TTaskStatusesDropdown<T> & {
		onChangeLoading?: (loading: boolean) => void;
	} & {
		task?: Nullable<ITeamTask>;
		showIssueLabels?: boolean;
		forDetails?: boolean;
	};

export function useMapToTaskStatusValues<T extends ITaskStatusItemList>(
	data: T[],
	bordered = false
): TStatus<any> {
	return useMemo(() => {
		return data.reduce((acc, item) => {
			const value: TStatus<any>[string] = {
				name: item.name?.split('-').join(' '),
				value: item.value || item.name,
				bgColor: item.color,
				bordered,
				icon: (
					<div className="relative flex items-center">
						{item.fullIconUrl && (
							<Image
								layout="fixed"
								src={item.fullIconUrl}
								height="20"
								width="16"
								alt={item.name}
							/>
						)}
					</div>
				),
			};

			if (value.name) {
				acc[value.name] = value;
			} else if (value.value) {
				acc[value.value] = value;
			}
			return acc;
		}, {} as TStatus<any>);
	}, [data, bordered]);
}

export function useActiveTaskStatus<T extends ITaskStatusField>(
	props: IActiveTaskStatuses<T>,
	status: TStatus<ITaskStatusStack[T]>,
	field: T
) {
	const { activeTeamTask, handleStatusUpdate } = useTeamTasks();
	const { taskLabels } = useTaskLabels();

	const task = props.task !== undefined ? props.task : activeTeamTask;

	/**
	 * "When the user changes the status of a task, update the status of the task and then call the
	 * onChangeLoading function with true, and when the status update is complete, call the onChangeLoading
	 * function with false."
	 *
	 * The first line of the function is a type annotation. It says that the function takes a single
	 * argument, which is an object of type ITaskStatusStack[T]. The type annotation is optional, but it's
	 * a good idea to include it
	 * @param status - The new status of the item.
	 */
	function onItemChange(status: ITaskStatusStack[T]) {
		props.onChangeLoading && props.onChangeLoading(true);
		let updatedField: ITaskStatusField = field;
		if (field === 'label' && task) {
			const currentTag = taskLabels.find(
				(label) => label.name === status
			) as Tag;
			updatedField = 'tags';
			status = [currentTag];
		}

		handleStatusUpdate(status, updatedField || field, task, true).finally(
			() => {
				props.onChangeLoading && props.onChangeLoading(false);
			}
		);
	}

	const { item, items, onChange } = useStatusValue<T>({
		status: status,
		value: task ? task[field] : props.defaultValue || undefined,
		onValueChange: onItemChange,
	});

	return {
		item,
		items,
		onChange,
		task,
		field,
	};
}

/**
 * It returns a set of items, the selected item, and a callback to change the selected item
 * @param statusItems - This is the object that contains the status items.
 * @param {ITaskStatusStack[T] | undefined}  - The current value of the status field.
 * @param [onValueChange] - This is the callback function that will be called when the value changes.
 */

export function useStatusValue<T extends ITaskStatusField>({
	value: $value,
	status: statusItems,
	onValueChange,
	multiple,
}: {
	status: TStatus<ITaskStatusStack[T]>;
	value: ITaskStatusStack[T] | undefined;
	onValueChange?: (
		v: ITaskStatusStack[T],
		values?: ITaskStatusStack[T][]
	) => void;
	multiple?: boolean;
}) {
	const onValueChangeRef = useCallbackRef(onValueChange);
	const multipleRef = useSyncRef(multiple);

	const items = useMemo(() => {
		return Object.keys(statusItems).map((key) => {
			const value = statusItems[key as ITaskStatusStack[T]];
			return {
				...value,
				name: key,
			} as Required<TStatusItem>;
		});
	}, [statusItems]);

	const [value, setValue] = useState<ITaskStatusStack[T] | undefined>($value);
	const [values, setValues] = useState<ITaskStatusStack[T][]>([]);

	const item = items.find((r) => r.name === value);

	useEffect(() => {
		setValue($value);
	}, [$value]);

	const onChange = useCallback(
		(value: ITaskStatusStack[T]) => {
			// Handle multiple select
			let values: ITaskStatusStack[T][] = [];
			if (multipleRef.current) {
				setValues((arr) => {
					const exists = arr.includes(value);
					values = exists ? arr.filter((v) => v !== value) : [...arr, value];
					return values;
				});
			} else {
				setValue(value);
			}

			onValueChangeRef.current && onValueChangeRef.current(value, values);
		},
		[setValue, onValueChangeRef, setValues, multipleRef]
	);

	return {
		items,
		onChange,
		item,
		values,
	};
}

//! =============== Task Status ================= //

export function useTaskStatusValue() {
	const { taskStatus } = useTaskStatus();
	return useMapToTaskStatusValues(taskStatus);
}

/**
 * Task status dropwdown
 */
export function TaskStatusDropdown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'status'>) {
	const taskStatusValues = useTaskStatusValue();

	const { item, items, onChange, values } = useStatusValue<'status'>({
		status: taskStatusValues,
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'status' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

/**
 * If no task hasn't been passed then the auth active task will used
 *
 * @param props
 * @returns
 */
export function ActiveTaskStatusDropdown(props: IActiveTaskStatuses<'status'>) {
	const taskStatusValues = useTaskStatusValue();

	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskStatusValues,
		'status'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
			disabled={props.disabled}
		/>
	);
}

//! =============== Task version ================= //

export const versionProperties: TStatus<IVersionProperty> = {
	'Version 1': {
		icon: <LoginIcon />,
		bgColor: '#ECE8FC',
	},
	'Version 2': {
		icon: <LoginIcon />,
		bgColor: '#ECE8FC',
	},
};

/**
 * Version dropdown that allows you to select a task property
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A dropdown with the version properties
 */
export function VersionPropertiesDropown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'version'>) {
	const { item, items, onChange, values } = useStatusValue<'version'>({
		status: versionProperties,
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'version' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

//! =============== Task Epic ================= //

/**
 * Version dropdown that allows you to select a task property
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A dropdown with the version properties
 */
export function EpicPropertiesDropdown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'epic'>) {
	const { item, items, onChange, values } = useStatusValue<'epic'>({
		status: {},
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'epic' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

//! =============== Task Status ================= //

export function useTaskPrioritiesValue() {
	const { taskPriorities } = useTaskPriorities();
	return useMapToTaskStatusValues(taskPriorities, false);
}

/**
 * Task dropdown that allows you to select a task property
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A dropdown with the task properties
 */
export function TaskPropertiesDropdown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'priority'>) {
	const taskPrioritiesValues = useTaskPrioritiesValue();

	const { item, items, onChange, values } = useStatusValue<'priority'>({
		status: taskPrioritiesValues,
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'priority' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

export function ActiveTaskPropertiesDropdown(
	props: IActiveTaskStatuses<'priority'>
) {
	const taskPrioritiesValues = useTaskPrioritiesValue();

	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskPrioritiesValues,
		'priority'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
			disabled={props.disabled}
		/>
	);
}

export function TaskPriorityStatus({
	task,
	className,
	showIssueLabels,
}: { task: Nullable<ITeamTask>; showIssueLabels?: boolean } & IClassName) {
	const taskPrioritiesValues = useTaskPrioritiesValue();

	return task?.priority ? (
		<TaskStatus
			{...taskPrioritiesValues[task?.priority]}
			showIssueLabels={showIssueLabels}
			issueType="issue"
			className={clsxm('rounded-md px-2 text-white', className)}
			bordered={false}
		/>
	) : (
		<></>
	);
}

//! =============== Task Sizes ================= //

export function useTaskSizesValue() {
	const { taskSizes } = useTaskSizes();
	return useMapToTaskStatusValues(taskSizes, false);
}

/**
 * Task dropdown that lets you select a task size
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A React component
 */
export function TaskSizesDropdown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'size'>) {
	const taskSizesValue = useTaskSizesValue();

	const { item, items, onChange, values } = useStatusValue<'size'>({
		status: taskSizesValue,
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'size' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

export function ActiveTaskSizesDropdown(props: IActiveTaskStatuses<'size'>) {
	const taskSizesValue = useTaskSizesValue();
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskSizesValue,
		'size'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
			disabled={props.disabled}
		/>
	);
}

//! =============== Task Label ================= //

export function useTaskLabelsValue() {
	const { taskLabels } = useTaskLabels();
	return useMapToTaskStatusValues(taskLabels, false);
}

export function TaskLabelsDropdown({
	className,
	defaultValue,
	onValueChange,
	forDetails,
	multiple,
}: TTaskStatusesDropdown<'label'>) {
	const taskLabelsValue = useTaskLabelsValue();

	const { item, items, onChange, values } = useStatusValue<'label'>({
		status: taskLabelsValue,
		value: defaultValue,
		onValueChange,
		multiple,
	});

	return (
		<StatusDropdown
			forDetails={forDetails}
			className={className}
			items={items}
			value={item}
			defaultItem={!item ? 'label' : undefined}
			onChange={onChange}
			multiple={multiple}
			values={values}
		/>
	);
}

export function ActiveTaskLabelsDropdown(
	props: IActiveTaskStatuses<'label' | 'tags'>
) {
	const taskLabelsValue = useTaskLabelsValue();
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskLabelsValue,
		'label'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
			disabled={props.disabled}
		/>
	);
}

//! =============== Task Project ================= //

export function ActiveTaskProjectDropdown(
	props: IActiveTaskStatuses<'project'>
) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		{},
		'project'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			forDetails={props.forDetails}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== Task Project ================= //

export function ActiveTaskTeamDropdown(props: IActiveTaskStatuses<'team'>) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		{},
		'team'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			forDetails={props.forDetails}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== FC Status dropdown ================= //

export function TaskStatus({
	children,
	name,
	icon,
	bgColor: backgroundColor,
	className,
	active = true,
	issueType = 'status',
	showIssueLabels,
	bordered,
	titleClassName,
	cheched = false,
}: PropsWithChildren<
	TStatusItem &
		IClassName & {
			active?: boolean;
			issueType?: 'status' | 'issue';
			showIssueLabels?: boolean;
			forDetails?: boolean;
			titleClassName?: string;
			cheched?: boolean;
		}
>) {
	return (
		<div
			className={clsxm(
				'py-2 md:px-4 px-2 flex items-center text-sm space-x-0 rounded-xl relative',
				issueType === 'issue' && ['px-2 text-white'],
				active ? ['dark:text-default'] : ['bg-gray-200 dark:bg-gray-700'],
				bordered && ['input-border'],
				bordered &&
					backgroundColor === 'transparent' && ['text-dark dark:text-white'],
				className
			)}
			style={{ backgroundColor: active ? backgroundColor : undefined }}
		>
			<div
				className={clsxm(
					'flex items-center space-x-1 whitespace-nowrap',
					titleClassName
				)}
			>
				{cheched ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20px"
						height="20px"
						className="fill-green-500"
					>
						<path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z" />
					</svg>
				) : (
					<>
						<>{active ? icon : <RecordIcon />}</>
					</>
				)}

				{name && (issueType !== 'issue' || showIssueLabels) && (
					<div className="capitalize text-ellipsis overflow-hidden">{name}</div>
				)}
			</div>
			{children}
		</div>
	);
}

/**
 * Fc Status drop down
 */
export function StatusDropdown<T extends TStatusItem>({
	value,
	onChange,
	items,
	className,
	defaultItem,
	issueType = 'status',
	children,
	showIssueLabels,
	forDetails,
	enabled = true,
	showButtonOnly,
	multiple,
	values = [],
	disabled,
}: PropsWithChildren<{
	value: T | undefined;
	values?: NonNullable<T['name']>[];
	onChange?(value: string): void;
	items: T[];
	className?: string;
	defaultItem?: ITaskStatusField;
	issueType?: 'status' | 'issue';
	forDetails?: boolean;
	showIssueLabels?: boolean;
	enabled?: boolean;
	showButtonOnly?: boolean;
	multiple?: boolean;
	disabled?: boolean;
}>) {
	const defaultValue: TStatusItem = {
		bgColor: undefined,
		icon: <span></span>,
		name: defaultItem,
	};

	const currentValue = value || defaultValue;
	const hasBtnIcon = issueType === 'status' && !showButtonOnly;

	const button = (
		<TaskStatus
			{...currentValue}
			forDetails={forDetails}
			active={!!value}
			showIssueLabels={showIssueLabels}
			issueType={issueType}
			className={clsxm(
				'justify-between w-full capitalize',
				!value && ['text-dark dark:text-white dark:bg-dark--theme-light'],
				forDetails && !value
					? 'bg-transparent border border-solid border-color-[#F2F2F2]'
					: 'bg-[#F2F2F2]'
			)}
			titleClassName={clsxm(
				hasBtnIcon && ['whitespace-nowrap overflow-hidden max-w-[78%]']
			)}
		>
			{/* If the issueType equal to status thee render the chevron down icon.  */}
			{issueType === 'status' && !showButtonOnly && (
				<ChevronDownIcon
					className={clsxm(
						'h-5 w-5 text-default transition duration-150 ease-in-out group-hover:text-opacity-80',
						(!value || currentValue.bordered) && ['text-dark dark:text-white'],
						hasBtnIcon && ['whitespace-nowrap w-5 h-5']
					)}
					aria-hidden="true"
				/>
			)}
		</TaskStatus>
	);

	const dropdown = (
		<div className={clsxm('relative', className)}>
			<Listbox
				value={value?.name || null}
				onChange={onChange}
				disabled={disabled}
			>
				{({ open }) => (
					<>
						<Listbox.Button
							className={clsx(!forDetails && 'w-full max-w-[170px]')}
						>
							{!multiple ? (
								<Tooltip
									enabled={hasBtnIcon && (value?.name || '').length > 10}
									label={capitalize(value?.name) || ''}
								>
									{button}
								</Tooltip>
							) : (
								<TaskStatus
									{...defaultValue}
									active={false}
									className={clsxm(
										'justify-between w-full capitalize text-xs',
										'text-dark dark:text-white bg-[#F2F2F2] dark:bg-dark--theme-light'
									)}
									name={
										values.length > 0
											? `Items (${values.length})`
											: defaultValue.name
									}
								>
									<ChevronDownIcon
										className={clsxm('h-5 w-5 text-default dark:text-white')}
									/>
								</TaskStatus>
							)}
						</Listbox.Button>

						<Transition
							show={open && enabled}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
							className={clsxm(
								'absolute right-0 left-0 z-40 min-w-min',
								issueType === 'issue' && ['left-auto right-auto']
							)}
						>
							<Listbox.Options>
								<Card
									shadow="bigger"
									className="!px-2 py-2 shadow-xlcard dark:shadow-lgcard-white"
								>
									{items.map((item, i) => (
										<Listbox.Option
											key={i}
											value={item.name}
											as={Fragment}
											disabled={disabled}
										>
											<li className="mb-3 cursor-pointer">
												<TaskStatus
													{...item}
													cheched={
														item.name ? values.includes(item.name) : false
													}
													className={clsxm(
														issueType === 'issue' && [
															'rounded-md px-2 text-white',
														]
													)}
												/>
											</li>
										</Listbox.Option>
									))}
									{children && (
										<Listbox.Button as="div">{children}</Listbox.Button>
									)}
								</Card>
							</Listbox.Options>
						</Transition>
					</>
				)}
			</Listbox>
		</div>
	);

	return showButtonOnly ? button : dropdown;
}
