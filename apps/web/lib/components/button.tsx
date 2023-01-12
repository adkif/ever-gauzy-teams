import { clsxm } from '@app/utils';
import { PropsWithChildren } from 'react';
import { SpinnerLoader } from './loader';

type Props = {
	variant?: 'primary' | 'outline' | 'ghost' | 'light' | 'dark';
	loading?: boolean;
} & PropsWithChildren &
	React.ComponentPropsWithRef<'button'>;

export function Button({
	children,
	className,
	variant = 'primary',
	loading,
	...rest
}: Props) {
	return (
		<button
			className={clsxm(
				'flex flex-row items-center justify-center py-3 px-4 gap-3 rounded-md min-w-[140px]',
				[
					variant === 'primary' && [
						'bg-primary dark:bg-primary-light text-white text-sm',
						'disabled:bg-primary-light disabled:opacity-40',
						// 'disabled:bg-primary-light dark:disabled:bg-[#33353E] disabled:opacity-40 dark:disabled:opacity-50',
					],
					variant === 'outline' && [
						'text-primary border border-primary font-medium',
						'dark:text-primary-light border dark:border-primary-light',
						'disabled:opacity-40',
					],
				],
				className
			)}
			{...rest}
		>
			{loading && (
				<SpinnerLoader
					size={17}
					variant={variant === 'primary' ? 'light' : 'dark'}
				/>
			)}
			{children}
		</button>
	);
}

type RoundedButtonProps = PropsWithChildren &
	React.ComponentPropsWithRef<'button'>;

export function RoundedButton({
	children,
	className,
	...rest
}: RoundedButtonProps) {
	return (
		<button
			className={clsxm(
				'bg-white dark:bg-dark-lighter dark:text-white rounded-full',
				'shadow-[0px_4px_24px_rgba(0,0,0,0.25)] dark:shadow-darker',
				'flex justify-center items-center text-default',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
