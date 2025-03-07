import { IClassName } from '@app/interfaces';
import { clsxm } from '@app/utils';

// ============================= BoxIcon ===========================//

export function BoxIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 21.61V12.54"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.92965 2.47979L4.58965 5.43979C3.37965 6.10979 2.38965 7.78979 2.38965 9.16979V14.8198C2.38965 16.1998 3.37965 17.8798 4.58965 18.5498L9.92965 21.5198C11.0696 22.1498 12.9396 22.1498 14.0796 21.5198L19.4196 18.5498C20.6296 17.8798 21.6196 16.1998 21.6196 14.8198V9.16979C21.6196 7.78979 20.6296 6.10979 19.4196 5.43979L14.0796 2.46979C12.9296 1.83979 11.0696 1.83979 9.92965 2.47979Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= BoxIcon ===========================//

export function SettingsOutlineIcon({ className }: IClassName) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={clsxm('w-6 h-6', className)}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
}

// ============================= MoonIcon ===========================//

export function MoonIcon({
	className,
}: {
	className?: string;
	pathClassName?: string;
}) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#7E7991]', className)}
		>
			<path
				d="M1.52232 9.31521C1.79232 13.1777 5.06982 16.3202 8.99232 16.4927C11.7598 16.6127 14.2348 15.3227 15.7198 13.2902C16.3348 12.4577 16.0048 11.9027 14.9773 12.0902C14.4748 12.1802 13.9573 12.2177 13.4173 12.1952C9.74982 12.0452 6.74982 8.97772 6.73482 5.35522C6.72732 4.38022 6.92982 3.45772 7.29732 2.61772C7.70232 1.68771 7.21482 1.24522 6.27732 1.64272C3.30732 2.89522 1.27482 5.88771 1.52232 9.31521Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function MoonDarkIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M16.1475 11.9475C16.0275 11.745 15.69 11.43 14.85 11.58C14.385 11.6625 13.9125 11.7 13.44 11.6775C11.6925 11.6025 10.11 10.8 9.00753 9.56253C8.03253 8.47503 7.43253 7.05753 7.42502 5.52753C7.42502 4.67253 7.59002 3.84753 7.92753 3.06753C8.25752 2.31003 8.02502 1.91253 7.86002 1.74753C7.68752 1.57503 7.28253 1.33503 6.48752 1.66503C3.42002 2.95503 1.52253 6.03003 1.74753 9.32253C1.97253 12.42 4.14753 15.0675 7.02752 16.065C7.71753 16.305 8.44503 16.4475 9.19503 16.4775C9.31503 16.485 9.43503 16.4925 9.55503 16.4925C12.0675 16.4925 14.4225 15.3075 15.9075 13.29C16.41 12.5925 16.275 12.15 16.1475 11.9475Z"
				fill="white"
			/>
		</svg>
	);
}

// ============================= PeopleIcon ===========================//

export function PeopleIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.08973 17.7804C7.67973 18.7204 7.67973 20.2603 9.08973 21.2003C10.6897 22.2703 13.3097 22.2703 14.9097 21.2003C16.3197 20.2603 16.3197 18.7204 14.9097 17.7804C13.3197 16.7204 10.6897 16.7204 9.08973 17.7804Z"
				className="dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= PeopleIconFilled ===========================//

export function PeopleIconFilled({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.08973 17.7804C7.67973 18.7204 7.67973 20.2603 9.08973 21.2003C10.6897 22.2703 13.3097 22.2703 14.9097 21.2003C16.3197 20.2603 16.3197 18.7204 14.9097 17.7804C13.3197 16.7204 10.6897 16.7204 9.08973 17.7804Z"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= UserIcon ===========================//

export function UserIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
				stroke="#7E7991"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
				stroke="#7E7991"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= UserIconFilled ===========================//

export function UserIconFilled({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
				className="stroke-primary dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= TrashIcon ===========================//

export function TrashIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
				stroke="#DE5536"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.66699 3.31325L5.81366 2.43992C5.92033 1.80659 6.00033 1.33325 7.12699 1.33325H8.87366C10.0003 1.33325 10.087 1.83325 10.187 2.44659L10.3337 3.31325"
				stroke="#DE5536"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.5669 6.09326L12.1336 12.8066C12.0603 13.8533 12.0003 14.6666 10.1403 14.6666H5.86026C4.00026 14.6666 3.94026 13.8533 3.86693 12.8066L3.43359 6.09326"
				stroke="#DE5536"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.88672 11H9.10672"
				stroke="#DE5536"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.33301 8.33325H9.66634"
				stroke="#DE5536"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= SunIcon ===========================//

export function SunIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25Z"
				className="fill-primary dark:fill-primary-light"
			/>
			<path
				d="M9 17.22C8.5875 17.22 8.25 16.9125 8.25 16.5V16.44C8.25 16.0275 8.5875 15.69 9 15.69C9.4125 15.69 9.75 16.0275 9.75 16.44C9.75 16.8525 9.4125 17.22 9 17.22ZM14.355 15.105C14.16 15.105 13.9725 15.03 13.8225 14.8875L13.725 14.79C13.4325 14.4975 13.4325 14.025 13.725 13.7325C14.0175 13.44 14.49 13.44 14.7825 13.7325L14.88 13.83C15.1725 14.1225 15.1725 14.595 14.88 14.8875C14.7375 15.03 14.55 15.105 14.355 15.105ZM3.645 15.105C3.45 15.105 3.2625 15.03 3.1125 14.8875C2.82 14.595 2.82 14.1225 3.1125 13.83L3.21 13.7325C3.5025 13.44 3.975 13.44 4.2675 13.7325C4.56 14.025 4.56 14.4975 4.2675 14.79L4.17 14.8875C4.0275 15.03 3.8325 15.105 3.645 15.105ZM16.5 9.75H16.44C16.0275 9.75 15.69 9.4125 15.69 9C15.69 8.5875 16.0275 8.25 16.44 8.25C16.8525 8.25 17.22 8.5875 17.22 9C17.22 9.4125 16.9125 9.75 16.5 9.75ZM1.56 9.75H1.5C1.0875 9.75 0.75 9.4125 0.75 9C0.75 8.5875 1.0875 8.25 1.5 8.25C1.9125 8.25 2.28 8.5875 2.28 9C2.28 9.4125 1.9725 9.75 1.56 9.75ZM14.2575 4.4925C14.0625 4.4925 13.875 4.4175 13.725 4.275C13.4325 3.9825 13.4325 3.51 13.725 3.2175L13.8225 3.12C14.115 2.8275 14.5875 2.8275 14.88 3.12C15.1725 3.4125 15.1725 3.885 14.88 4.1775L14.7825 4.275C14.64 4.4175 14.4525 4.4925 14.2575 4.4925ZM3.7425 4.4925C3.5475 4.4925 3.36 4.4175 3.21 4.275L3.1125 4.17C2.82 3.8775 2.82 3.405 3.1125 3.1125C3.405 2.82 3.8775 2.82 4.17 3.1125L4.2675 3.21C4.56 3.5025 4.56 3.975 4.2675 4.2675C4.125 4.4175 3.93 4.4925 3.7425 4.4925ZM9 2.28C8.5875 2.28 8.25 1.9725 8.25 1.56V1.5C8.25 1.0875 8.5875 0.75 9 0.75C9.4125 0.75 9.75 1.0875 9.75 1.5C9.75 1.9125 9.4125 2.28 9 2.28Z"
				className="fill-primary dark:fill-primary-light"
			/>
		</svg>
	);
}

export function SunDarkIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M9 13.875C11.6924 13.875 13.875 11.6924 13.875 9C13.875 6.30761 11.6924 4.125 9 4.125C6.30761 4.125 4.125 6.30761 4.125 9C4.125 11.6924 6.30761 13.875 9 13.875Z"
				stroke="#969CA6"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.355 14.355L14.2575 14.2575M14.2575 3.7425L14.355 3.645L14.2575 3.7425ZM3.645 14.355L3.7425 14.2575L3.645 14.355ZM9 1.56V1.5V1.56ZM9 16.5V16.44V16.5ZM1.56 9H1.5H1.56ZM16.5 9H16.44H16.5ZM3.7425 3.7425L3.645 3.645L3.7425 3.7425Z"
				stroke="#969CA6"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= BriefcaseIcon ===========================//

export function BriefcaseIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.62012 11.27C4.87012 12.81 7.41012 13.74 10.0001 14.03"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= ArrowLeft ===========================//

export function ArrowLeft({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
				className="stroke-[#292D32] dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.4999 12H3.66992"
				className="stroke-[#292D32] dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= StopIcon ===========================//

export function StopIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-primary dark:stroke-primary-light', className)}
		>
			<path
				d="M6.975 15.75H11.025C14.4 15.75 15.75 14.4 15.75 11.025V6.975C15.75 3.6 14.4 2.25 11.025 2.25H6.975C3.6 2.25 2.25 3.6 2.25 6.975V11.025C2.25 14.4 3.6 15.75 6.975 15.75Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= DevicesIcon ===========================//

export function DevicesIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M17.0104 12.7298C17.6014 12.7298 18.0804 12.2507 18.0804 11.6598C18.0804 11.0688 17.6014 10.5898 17.0104 10.5898C16.4195 10.5898 15.9404 11.0688 15.9404 11.6598C15.9404 12.2507 16.4195 12.7298 17.0104 12.7298Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 6V7.78998C19.75 7.75998 19.46 7.73999 19.15 7.73999H14.87C12.73 7.73999 12.02 8.45003 12.02 10.59V15.7H6C2.8 15.7 2 14.9 2 11.7V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 15.7002V20.0002"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 11.8999H12"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.9502 20H12.0002"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.0095 12.7303C17.6004 12.7303 18.0794 12.2512 18.0794 11.6603C18.0794 11.0693 17.6004 10.5903 17.0095 10.5903C16.4185 10.5903 15.9395 11.0693 15.9395 11.6603C15.9395 12.2512 16.4185 12.7303 17.0095 12.7303Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.9995 7.79022C19.7495 7.76022 19.4595 7.74023 19.1495 7.74023H14.8695C12.7295 7.74023 12.0195 8.45027 12.0195 10.5903V19.1503C12.0195 21.2903 12.7295 22.0002 14.8695 22.0002H19.1495C21.2895 22.0002 21.9995 21.2903 21.9995 19.1503V10.5903C21.9995 8.76027 21.4795 7.98022 19.9995 7.79022ZM17.0096 10.5903C17.5996 10.5903 18.0795 11.0702 18.0795 11.6602C18.0795 12.2502 17.5996 12.7302 17.0096 12.7302C16.4196 12.7302 15.9395 12.2502 15.9395 11.6602C15.9395 11.0702 16.4196 10.5903 17.0096 10.5903ZM17.0096 19.1503C15.8296 19.1503 14.8695 18.1903 14.8695 17.0103C14.8695 16.5203 15.0395 16.0603 15.3195 15.7003C15.7095 15.2003 16.3196 14.8702 17.0096 14.8702C17.5496 14.8702 18.0395 15.0703 18.4095 15.3903C18.8595 15.7903 19.1495 16.3703 19.1495 17.0103C19.1495 18.1903 18.1896 19.1503 17.0096 19.1503Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.1491 17.0101C19.1491 18.1901 18.1892 19.1501 17.0092 19.1501C15.8292 19.1501 14.8691 18.1901 14.8691 17.0101C14.8691 16.5201 15.0392 16.0601 15.3192 15.7001C15.7092 15.2001 16.3192 14.8701 17.0092 14.8701C17.5492 14.8701 18.0391 15.0701 18.4091 15.3901C18.8591 15.7901 19.1491 16.3701 19.1491 17.0101Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.0095 12.7303C17.6004 12.7303 18.0794 12.2512 18.0794 11.6603C18.0794 11.0693 17.6004 10.5903 17.0095 10.5903C16.4185 10.5903 15.9395 11.0693 15.9395 11.6603C15.9395 12.2512 16.4185 12.7303 17.0095 12.7303Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= Timer Stop ===============================//

export function TimerStopIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M23.7533 9.07667L5.29667 20.16C4.585 20.5917 3.62833 20.16 3.535 19.3317C3.51167 19.11 3.5 18.8883 3.5 18.6667V9.33333C3.5 5.83333 5.83333 3.5 9.33333 3.5H18.6667C22.1667 3.5 23.6017 5.29667 24.2783 7.75833C24.4183 8.27167 24.1967 8.80833 23.7533 9.07667Z"
				fill="white"
			/>
			<path
				d="M24.4999 12.9383V18.6666C24.4999 22.1666 22.1666 24.4999 18.6666 24.4999H9.33323C8.2599 24.4999 7.2449 24.2083 6.38156 23.6949C5.6349 23.2633 5.68156 22.1666 6.41656 21.7233L22.7266 11.9349C23.5082 11.4683 24.4999 12.0283 24.4999 12.9383Z"
				fill="white"
			/>
		</svg>
	);
}

// ============================= Timer Play ===============================//

export function TimerPlayIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-white', className)}
		>
			<path d="M20.4043 11.2L6.53268 19.565C5.71602 20.055 4.66602 19.4717 4.66602 18.515V9.18168C4.66602 5.11002 9.06435 2.56668 12.5993 4.59668L17.9544 7.67668L20.3927 9.07668C21.1977 9.55502 21.2094 10.7217 20.4043 11.2Z" />
			<path d="M21.1056 18.0367L16.3806 20.7667L11.6673 23.485C9.97559 24.4533 8.06226 24.255 6.67393 23.275C5.99726 22.8083 6.07893 21.77 6.79059 21.35L21.6189 12.46C22.3189 12.04 23.2406 12.4367 23.3689 13.2417C23.6606 15.05 22.9139 16.9983 21.1056 18.0367Z" />
		</svg>
	);
}

// ============================= User Online Icon ===============================//

export function UserOnlineIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="11"
			viewBox="0 0 10 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M8.14048 3.53982C8.26401 3.73335 8.19813 3.99276 8.00048 4.11217L7.75754 4.25629L2.3593 7.49276C2.16166 7.61217 1.90224 7.54629 1.78695 7.34452C1.37519 6.62805 1.18989 5.75511 1.35048 4.84099C1.62224 3.28864 2.89871 2.05335 4.4593 1.83099C6.00342 1.61276 7.3993 2.35394 8.14048 3.53982Z"
				fill="#307D50"
			/>
			<path
				d="M8.65933 6.08872C8.37933 7.83872 6.83109 9.17695 5.05639 9.20577C4.27403 9.21813 3.54933 8.99166 2.94815 8.58401C2.69286 8.41519 2.70109 8.03636 2.96462 7.87989L8.07462 4.87813C8.34227 4.72166 8.67168 4.90283 8.69639 5.21166C8.71698 5.49989 8.70462 5.79225 8.65933 6.08872Z"
				fill="#307D50"
			/>
		</svg>
	);
}

//  ============================= Logout Icons ============================= //

export function LogoutIcon({ className }: IClassName) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={clsxm('w-6 h-6', className)}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
			/>
		</svg>
	);
}

//  ============================= Tick Circle Icon ============================= //

export function TickCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#BEBCC8]', className)}
		>
			<path
				d="M7.99992 14.6666C11.6666 14.6666 14.6666 11.6666 14.6666 7.99992C14.6666 4.33325 11.6666 1.33325 7.99992 1.33325C4.33325 1.33325 1.33325 4.33325 1.33325 7.99992C1.33325 11.6666 4.33325 14.6666 7.99992 14.6666Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.16675 7.99995L7.05341 9.88661L10.8334 6.11328"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Timer Icon ============================= //

export function TimerIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M11.43 1.5H6.57003C3.75003 1.5 3.53253 4.035 5.05503 5.415L12.945 12.585C14.4675 13.965 14.25 16.5 11.43 16.5H6.57003C3.75003 16.5 3.53253 13.965 5.05503 12.585L12.945 5.415C14.4675 4.035 14.25 1.5 11.43 1.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Login Icon ============================= //

export function LoginIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M6.67505 5.67018C6.90755 2.97018 8.29505 1.86768 11.3325 1.86768H11.43C14.7825 1.86768 16.125 3.21018 16.125 6.56268V11.4527C16.125 14.8052 14.7825 16.1477 11.43 16.1477H11.3325C8.31755 16.1477 6.93005 15.0602 6.68255 12.4052"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.5 9H11.16"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.48755 6.4873L12 8.99981L9.48755 11.5123"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Search Status Icon ============================= //

export function SearchStatusIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M10.5 3.75H15"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.5 6H12.75"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.75 8.625C15.75 12.5625 12.5625 15.75 8.625 15.75C4.6875 15.75 1.5 12.5625 1.5 8.625C1.5 4.6875 4.6875 1.5 8.625 1.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5 16.5L15 15"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Search Normal Icon ============================= //

export function SearchNormalIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048]', className)}
		>
			<path
				d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 22L20 20"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Clock Icon ============================= //

export function ClockIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.7825 11.3848L9.45753 9.99732C9.05253 9.75732 8.72253 9.17982 8.72253 8.70732V5.63232"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Close Circle Icon ============================= //

export function CloseCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.87744 11.1224L11.1224 6.87744"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.1224 11.1224L6.87744 6.87744"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Circle Icon ============================= //

export function CircleIcon({ className }: IClassName) {
	return (
		<svg
			width="17"
			height="18"
			viewBox="0 0 17 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M8.5 16.5C12.625 16.5 16 13.125 16 9C16 4.875 12.625 1.5 8.5 1.5C4.375 1.5 1 4.875 1 9C1 13.125 4.375 16.5 8.5 16.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Close Icon ============================= //

export function CloseIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#7E7991]', className)}
		>
			<path
				d="M4.16748 4.16675L15.8334 15.8326"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.16664 15.8326L15.8325 4.16675"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Mail Icon ============================= //

export function MailIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#B1AEBC]', className)}
		>
			<path
				d="M4.6665 6.5L7.99984 8.83333L11.3332 6.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.33325 11.8333V5.16659C1.33325 4.81296 1.47373 4.47382 1.72378 4.22378C1.97382 3.97373 2.31296 3.83325 2.66659 3.83325H13.3333C13.6869 3.83325 14.026 3.97373 14.2761 4.22378C14.5261 4.47382 14.6666 4.81296 14.6666 5.16659V11.8333C14.6666 12.1869 14.5261 12.526 14.2761 12.7761C14.026 13.0261 13.6869 13.1666 13.3333 13.1666H2.66659C2.31296 13.1666 1.97382 13.0261 1.72378 12.7761C1.47373 12.526 1.33325 12.1869 1.33325 11.8333Z"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

//  ============================= Edit Icon ============================= //

export function EditIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32] dark:stroke-slate-300', className)}
		>
			<path
				d="M9.1665 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V10.8332"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.3666 2.51688L6.7999 9.08354C6.5499 9.33354 6.2999 9.82521 6.2499 10.1835L5.89157 12.6919C5.75823 13.6002 6.3999 14.2335 7.30823 14.1085L9.81657 13.7502C10.1666 13.7002 10.6582 13.4502 10.9166 13.2002L17.4832 6.63354C18.6166 5.50021 19.1499 4.18354 17.4832 2.51688C15.8166 0.850211 14.4999 1.38354 13.3666 2.51688Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.4248 3.4585C12.9831 5.45016 14.5415 7.0085 16.5415 7.57516"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Edit2 Icon ============================= //

export function Edit2Icon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32] dark:stroke-slate-300', className)}
		>
			<path
				d="M8.83958 2.40006L3.36624 8.1934C3.15958 8.4134 2.95958 8.84673 2.91958 9.14673L2.67291 11.3067C2.58624 12.0867 3.14624 12.6201 3.91958 12.4867L6.06624 12.1201C6.36624 12.0667 6.78624 11.8467 6.99291 11.6201L12.4662 5.82673C13.4129 4.82673 13.8396 3.68673 12.3662 2.2934C10.8996 0.913397 9.78624 1.40006 8.83958 2.40006Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.92676 3.3667C8.21342 5.2067 9.70676 6.61337 11.5601 6.80003"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 14.6667H14"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Edit Icon ============================= //

export function DraggerIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#CCCCCC]', className)}
		>
			<path
				d="M9 3H11V5H9V3ZM13 3H15V5H13V3ZM9 7H11V9H9V7ZM13 7H15V9H13V7ZM9 11H11V13H9V11ZM13 11H15V13H13V11ZM9 15H11V17H9V15ZM13 15H15V17H13V15ZM9 19H11V21H9V19ZM13 19H15V21H13V19Z"
				fill="#CCCCCC"
			/>
		</svg>
	);
}

//  ============================= More Icon ============================= //

export function MoreIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048] dark:stroke-[#CCCCCC]', className)}
		>
			<path
				d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
				strokeWidth="1.5"
			/>
			<path
				d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
				strokeWidth="1.5"
			/>
			<path
				d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

//  ============================= Pause Icon ============================= //

export function PauseIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#B87B1E]', className)}
		>
			<path d="M4.44395 7.92772V2.07242C4.44395 1.51654 4.20924 1.29419 3.6163 1.29419H2.12159C1.52865 1.29419 1.29395 1.51654 1.29395 2.07242V7.92772C1.29395 8.4836 1.52865 8.70595 2.12159 8.70595H3.6163C4.20924 8.70595 4.44395 8.4836 4.44395 7.92772Z" />
			<path d="M8.70566 7.92772V2.07242C8.70566 1.51654 8.47096 1.29419 7.87802 1.29419H6.38331C5.79449 1.29419 5.55566 1.51654 5.55566 2.07242V7.92772C5.55566 8.4836 5.79037 8.70595 6.38331 8.70595H7.87802C8.47096 8.70595 8.70566 8.4836 8.70566 7.92772Z" />
		</svg>
	);
}

//  ============================= Stop Circle Icon ============================= //

export function StopCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#E65B5B]', className)}
		>
			<path d="M4.98728 0.882324C2.71433 0.882324 0.869629 2.72703 0.869629 4.99997C0.869629 7.27291 2.71433 9.11762 4.98728 9.11762C7.26022 9.11762 9.10492 7.27291 9.10492 4.99997C9.10492 2.72703 7.26434 0.882324 4.98728 0.882324ZM6.74139 5.50644C6.74139 6.18997 6.18963 6.74174 5.5061 6.74174H4.49316C3.80963 6.74174 3.25786 6.18997 3.25786 5.50644V4.4935C3.25786 3.80997 3.80963 3.25821 4.49316 3.25821H5.5061C6.18963 3.25821 6.74139 3.80997 6.74139 4.4935V5.50644Z" />
		</svg>
	);
}

//  ============================= Settings 4 Icon ============================= //

export function Settings4Icon({ className }: IClassName) {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048]', className)}
		>
			<path
				d="M12.833 3.79175H9.33301"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.50033 3.79175H1.16699"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.83366 5.83333C6.96124 5.83333 7.87533 4.91925 7.87533 3.79167C7.87533 2.66409 6.96124 1.75 5.83366 1.75C4.70608 1.75 3.79199 2.66409 3.79199 3.79167C3.79199 4.91925 4.70608 5.83333 5.83366 5.83333Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.8333 10.2083H10.5"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.66699 10.2083H1.16699"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.16667 12.2501C9.29425 12.2501 10.2083 11.336 10.2083 10.2084C10.2083 9.08083 9.29425 8.16675 8.16667 8.16675C7.03909 8.16675 6.125 9.08083 6.125 10.2084C6.125 11.336 7.03909 12.2501 8.16667 12.2501Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Record Icon ============================= //

export function RecordIcon({ className }: IClassName) {
	return (
		<svg
			width="14"
			height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-default dark:stroke-white', className)}
		>
			<path
				d="M7 12.75C9.8995 12.75 12.25 10.3995 12.25 7.5C12.25 4.6005 9.8995 2.25 7 2.25C4.1005 2.25 1.75 4.6005 1.75 7.5C1.75 10.3995 4.1005 12.75 7 12.75Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Bug Report Icon ============================= //

export function BugReportIcon({ className }: IClassName) {
	return (
		<svg
			width="12"
			height="13"
			viewBox="0 0 12 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-white', className)}
		>
			<path d="M6 11C5.45833 11 4.95633 10.8667 4.494 10.6C4.03133 10.3333 3.66667 9.96667 3.4 9.5H2V8.5H3.05C3.025 8.33333 3.0105 8.16667 3.0065 8C3.00217 7.83333 3 7.66667 3 7.5H2V6.5H3C3 6.33333 3.00217 6.16667 3.0065 6C3.0105 5.83333 3.025 5.66667 3.05 5.5H2V4.5H3.4C3.51667 4.30833 3.648 4.12917 3.794 3.9625C3.93967 3.79583 4.10833 3.65 4.3 3.525L3.5 2.7L4.2 2L5.275 3.075C5.50833 3 5.74583 2.9625 5.9875 2.9625C6.22917 2.9625 6.46667 3 6.7 3.075L7.8 2L8.5 2.7L7.675 3.525C7.86667 3.65 8.03967 3.79367 8.194 3.956C8.348 4.11867 8.48333 4.3 8.6 4.5H10V5.5H8.95C8.975 5.66667 8.98967 5.83333 8.994 6C8.998 6.16667 9 6.33333 9 6.5H10V7.5H9C9 7.66667 8.998 7.83333 8.994 8C8.98967 8.16667 8.975 8.33333 8.95 8.5H10V9.5H8.6C8.33333 9.96667 7.96883 10.3333 7.5065 10.6C7.04383 10.8667 6.54167 11 6 11ZM6 10C6.55 10 7.02083 9.80417 7.4125 9.4125C7.80417 9.02083 8 8.55 8 8V6C8 5.45 7.80417 4.97917 7.4125 4.5875C7.02083 4.19583 6.55 4 6 4C5.45 4 4.97917 4.19583 4.5875 4.5875C4.19583 4.97917 4 5.45 4 6V8C4 8.55 4.19583 9.02083 4.5875 9.4125C4.97917 9.80417 5.45 10 6 10ZM5 8.5H7V7.5H5V8.5ZM5 6.5H7V5.5H5V6.5Z" />
		</svg>
	);
}

//  ============================= Task Square Icon ============================= //

export function TaskSquareIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-white', className)}
		>
			<path
				d="M5.1543 3.7002H7.3418"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.6582 3.7002L2.9707 4.0127L3.9082 3.0752"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.1543 6.6167H7.3418"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.6582 6.6167L2.9707 6.9292L3.9082 5.9917"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.75016 9.16683H6.25016C8.3335 9.16683 9.16683 8.3335 9.16683 6.25016V3.75016C9.16683 1.66683 8.3335 0.833496 6.25016 0.833496H3.75016C1.66683 0.833496 0.833496 1.66683 0.833496 3.75016V6.25016C0.833496 8.3335 1.66683 9.16683 3.75016 9.16683Z"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Note Icon ============================= //

export function NoteIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-white', className)}
		>
			<path
				d="M8.33317 3.43766V7.50016C8.33317 8.75016 7.58734 9.16683 6.6665 9.16683H3.33317C2.41234 9.16683 1.6665 8.75016 1.6665 7.50016V3.43766C1.6665 2.0835 2.41234 1.771 3.33317 1.771C3.33317 2.02933 3.43733 2.26266 3.60816 2.43349C3.77899 2.60433 4.01234 2.7085 4.27067 2.7085H5.729C6.24567 2.7085 6.6665 2.28766 6.6665 1.771C7.58734 1.771 8.33317 2.0835 8.33317 3.43766Z"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.66683 1.771C6.66683 2.28766 6.246 2.7085 5.72933 2.7085H4.271C4.01266 2.7085 3.77932 2.60433 3.60848 2.43349C3.43765 2.26266 3.3335 2.02933 3.3335 1.771C3.3335 1.25433 3.75433 0.833496 4.271 0.833496H5.72933C5.98766 0.833496 6.22101 0.937664 6.39184 1.1085C6.56267 1.27933 6.66683 1.51266 6.66683 1.771Z"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.3335 5.4165H5.00016"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.3335 7.0835H6.66683"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Category Icon ============================= //

export function CategoryIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-white', className)}
		>
			<path
				d="M2.0835 4.16683H2.91683C3.75016 4.16683 4.16683 3.75016 4.16683 2.91683V2.0835C4.16683 1.25016 3.75016 0.833496 2.91683 0.833496H2.0835C1.25016 0.833496 0.833496 1.25016 0.833496 2.0835V2.91683C0.833496 3.75016 1.25016 4.16683 2.0835 4.16683Z"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.0835 4.16683H7.91683C8.75016 4.16683 9.16683 3.75016 9.16683 2.91683V2.0835C9.16683 1.25016 8.75016 0.833496 7.91683 0.833496H7.0835C6.25016 0.833496 5.8335 1.25016 5.8335 2.0835V2.91683C5.8335 3.75016 6.25016 4.16683 7.0835 4.16683Z"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.0835 9.16683H7.91683C8.75016 9.16683 9.16683 8.75016 9.16683 7.91683V7.0835C9.16683 6.25016 8.75016 5.8335 7.91683 5.8335H7.0835C6.25016 5.8335 5.8335 6.25016 5.8335 7.0835V7.91683C5.8335 8.75016 6.25016 9.16683 7.0835 9.16683Z"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.0835 9.16683H2.91683C3.75016 9.16683 4.16683 8.75016 4.16683 7.91683V7.0835C4.16683 6.25016 3.75016 5.8335 2.91683 5.8335H2.0835C1.25016 5.8335 0.833496 6.25016 0.833496 7.0835V7.91683C0.833496 8.75016 1.25016 9.16683 2.0835 9.16683Z"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Refresh Icon ============================= //

export function RefreshIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#7E7991]', className)}
		>
			<path
				d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 12C2 17.52 6.48 22 12 22"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="3 3"
			/>
		</svg>
	);
}

//  ============================= Highest Icon ============================= //
export function HighestIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="24"
			viewBox="0 0 16 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M13.28 18.0332L8.9333 13.6865C8.41997 13.1732 7.57997 13.1732 7.06664 13.6865L2.71997 18.0332"
				stroke="#EE6C4D"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.28 10.0332L8.9333 5.68654C8.41997 5.1732 7.57997 5.1732 7.06664 5.68654L2.71997 10.0332"
				stroke="#EE6C4D"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= High Icon ============================= //
export function HighIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M13.28 10.0332L8.9333 5.68654C8.41997 5.1732 7.57997 5.1732 7.06664 5.68654L2.71997 10.0332"
				stroke="#EE6C4D"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Medium Icon ============================= //
export function MediumIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="24"
			viewBox="0 0 16 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3.28823 12.9235C2.57676 12.9235 2 13.5003 2 14.2118V14.2118C2 14.9232 2.57676 15.5 3.28823 15.5H12.3059C13.0174 15.5 13.5941 14.9232 13.5941 14.2118V14.2118C13.5941 13.5003 13.0174 12.9235 12.3059 12.9235H3.28823ZM3.28823 6.74C2.57676 6.74 2 7.31676 2 8.02824V8.02824C2 8.73971 2.57676 9.31647 3.28824 9.31647H12.3059C13.0174 9.31647 13.5941 8.73971 13.5941 8.02824V8.02824C13.5941 7.31676 13.0174 6.74 12.3059 6.74H3.28823Z"
				fill="#F2C94C"
			/>
		</svg>
	);
}

//  ============================= Low Icon ============================= //
export function LowIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668"
				stroke="#2F80ED"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Low Icon ============================= //
export function LowestIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="24"
			viewBox="0 0 16 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M13.28 5.96655L8.9333 10.3132C8.41997 10.8266 7.57997 10.8266 7.06664 10.3132L2.71997 5.96655"
				stroke="#2F80ED"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.28 13.9666L8.9333 18.3132C8.41997 18.8266 7.57997 18.8266 7.06664 18.3132L2.71997 13.9666"
				stroke="#2F80ED"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Xlarge Icon ============================= //

export function XlargeIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="22"
			viewBox="0 0 28 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M0.169434 17.6L3.91163 11.7942L0.231034 6.12695H2.29463L5.37463 10.8702H4.49683L7.54603 6.12695H9.60963L5.94443 11.7942L9.68663 17.6H7.62303L4.49683 12.7336L5.37463 12.749L2.21763 17.6H0.169434Z"
				fill="#EE6C4D"
			/>
			<path
				d="M9.71202 17.6L13.4542 11.7942L9.77362 6.12695H11.8372L14.9172 10.8702H14.0394L17.0886 6.12695H19.1522L15.487 11.7942L19.2292 17.6H17.1656L14.0394 12.7336L14.9172 12.749L11.7602 17.6H9.71202Z"
				fill="#EE6C4D"
			/>
			<path
				d="M20.271 17.6V6.12695H22.0882V15.983H27.047V17.6H20.271Z"
				fill="#EE6C4D"
			/>
		</svg>
	);
}

//  ============================= Large Icon ============================= //

export function LargeIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="22"
			viewBox="0 0 28 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M4.99731 17.6L8.73951 11.7942L5.05891 6.12695H7.12251L10.2025 10.8702H9.32471L12.3739 6.12695H14.4375L10.7723 11.7942L14.5145 17.6H12.4509L9.32471 12.7336L10.2025 12.749L7.04551 17.6H4.99731Z"
				fill="#F2994A"
			/>
			<path
				d="M15.5563 17.6V6.12695H17.3735V15.983H22.3323V17.6H15.5563Z"
				fill="#F2994A"
			/>
		</svg>
	);
}

//  ============================= MediumSize Icon ============================= //
export function MediumSizeIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="22"
			viewBox="0 0 28 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M8.20581 17.6V6.12695H9.89981L14.2118 12.1022H13.3648L17.5998 6.12695H19.2938V17.6H17.492V8.26755L18.1696 8.45235L13.8422 14.366H13.6574L9.42241 8.45235L10.023 8.26755V17.6H8.20581Z"
				fill="#F2C94C"
			/>
		</svg>
	);
}

//  ============================= SmallSize Icon ============================= //
export function SmallSizeIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="22"
			viewBox="0 0 28 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M13.9697 17.785C13.2511 17.785 12.5837 17.6515 11.9677 17.3846C11.3517 17.1074 10.8281 16.7326 10.3969 16.2604C9.96574 15.7881 9.64747 15.244 9.44214 14.628L10.9821 13.9812C11.2593 14.6896 11.6649 15.2337 12.1987 15.6136C12.7326 15.9934 13.3486 16.1834 14.0467 16.1834C14.4574 16.1834 14.8167 16.1218 15.1247 15.9986C15.4327 15.8651 15.6689 15.6803 15.8331 15.4442C16.0077 15.208 16.0949 14.936 16.0949 14.628C16.0949 14.207 15.9769 13.8734 15.7407 13.627C15.5046 13.3806 15.1555 13.1855 14.6935 13.0418L12.5375 12.3642C11.6751 12.0972 11.0181 11.6917 10.5663 11.1476C10.1146 10.5932 9.88874 9.94638 9.88874 9.20718C9.88874 8.56038 10.0479 7.99572 10.3661 7.51318C10.6844 7.02038 11.1207 6.63538 11.6751 6.35818C12.2398 6.08098 12.8815 5.94238 13.6001 5.94238C14.288 5.94238 14.9143 6.06558 15.4789 6.31198C16.0436 6.54812 16.5261 6.87665 16.9265 7.29758C17.3372 7.71852 17.6349 8.20618 17.8197 8.76058L16.3105 9.42278C16.0847 8.81705 15.7305 8.34992 15.2479 8.02138C14.7757 7.69285 14.2264 7.52858 13.6001 7.52858C13.2203 7.52858 12.8866 7.59532 12.5991 7.72878C12.3117 7.85198 12.0858 8.03678 11.9215 8.28318C11.7675 8.51932 11.6905 8.79652 11.6905 9.11478C11.6905 9.48438 11.8086 9.81292 12.0447 10.1004C12.2809 10.3878 12.6402 10.6034 13.1227 10.7472L15.1247 11.3786C16.0385 11.6558 16.7263 12.0562 17.1883 12.5798C17.6503 13.0931 17.8813 13.7348 17.8813 14.5048C17.8813 15.1413 17.7119 15.706 17.3731 16.1988C17.0446 16.6916 16.5877 17.0817 16.0025 17.3692C15.4173 17.6464 14.7397 17.785 13.9697 17.785Z"
				fill="#2F80ED"
			/>
		</svg>
	);
}

export function TinySizeIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="22"
			viewBox="0 0 28 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M4.1626 17.5999L7.9048 11.7941L4.2242 6.12694H6.2878L9.3678 10.8701H8.49L11.5392 6.12694H13.6028L9.9376 11.7941L13.6798 17.5999H11.6162L8.49 12.7335L9.3678 12.7489L6.2108 17.5999H4.1626Z"
				fill="#2F80ED"
			/>
			<path
				d="M18.741 17.7847C18.0223 17.7847 17.355 17.6513 16.739 17.3843C16.123 17.1071 15.5994 16.7324 15.1682 16.2601C14.737 15.7879 14.4187 15.2437 14.2134 14.6277L15.7534 13.9809C16.0306 14.6893 16.4361 15.2335 16.97 15.6133C17.5039 15.9932 18.1199 16.1831 18.818 16.1831C19.2287 16.1831 19.588 16.1215 19.896 15.9983C20.204 15.8649 20.4401 15.6801 20.6044 15.4439C20.7789 15.2078 20.8662 14.9357 20.8662 14.6277C20.8662 14.2068 20.7481 13.8731 20.512 13.6267C20.2759 13.3803 19.9268 13.1853 19.4648 13.0415L17.3088 12.3639C16.4464 12.097 15.7893 11.6915 15.3376 11.1473C14.8859 10.5929 14.66 9.94614 14.66 9.20694C14.66 8.56014 14.8191 7.99547 15.1374 7.51294C15.4557 7.02014 15.892 6.63514 16.4464 6.35794C17.0111 6.08074 17.6527 5.94214 18.3714 5.94214C19.0593 5.94214 19.6855 6.06534 20.2502 6.31174C20.8148 6.54787 21.2974 6.87641 21.6978 7.29734C22.1085 7.71827 22.4062 8.20594 22.591 8.76034L21.0818 9.42254C20.8559 8.8168 20.5017 8.34967 20.0192 8.02114C19.5469 7.69261 18.9977 7.52834 18.3714 7.52834C17.9915 7.52834 17.6579 7.59507 17.3704 7.72854C17.0829 7.85174 16.8571 8.03654 16.6928 8.28294C16.5388 8.51907 16.4618 8.79627 16.4618 9.11454C16.4618 9.48414 16.5799 9.81267 16.816 10.1001C17.0521 10.3876 17.4115 10.6032 17.894 10.7469L19.896 11.3783C20.8097 11.6555 21.4976 12.0559 21.9596 12.5795C22.4216 13.0929 22.6526 13.7345 22.6526 14.5045C22.6526 15.1411 22.4832 15.7057 22.1444 16.1985C21.8159 16.6913 21.359 17.0815 20.7738 17.3689C20.1886 17.6461 19.511 17.7847 18.741 17.7847Z"
				fill="#2F80ED"
			/>
		</svg>
	);
}

export function BoldIcon({ className }: IClassName) {
	return (
		<svg
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm(className)}
		>
			<path d="M14.1692 9.44531C14.621 8.89629 14.9074 8.23014 14.995 7.52454C15.0826 6.81895 14.9678 6.10298 14.664 5.46015C14.3602 4.81731 13.8799 4.27409 13.2791 3.89384C12.6783 3.51359 11.9818 3.31197 11.2708 3.3125H5.33325C5.08461 3.3125 4.84615 3.41127 4.67034 3.58709C4.49452 3.7629 4.39575 4.00136 4.39575 4.25V16.125C4.39575 16.3736 4.49452 16.6121 4.67034 16.7879C4.84615 16.9637 5.08461 17.0625 5.33325 17.0625H12.2083C13.1084 17.0612 13.9826 16.761 14.6937 16.209C15.4047 15.657 15.9123 14.8845 16.1367 14.0128C16.3611 13.1411 16.2896 12.2195 15.9335 11.3928C15.5774 10.5661 14.9568 9.88109 14.1692 9.44531ZM6.27075 5.1875H11.2708C11.768 5.1875 12.2449 5.38505 12.5966 5.73668C12.9482 6.08831 13.1458 6.56522 13.1458 7.0625C13.1458 7.55978 12.9482 8.0367 12.5966 8.38833C12.2449 8.73996 11.768 8.9375 11.2708 8.9375H6.27075V5.1875ZM12.2083 15.1875H6.27075V10.8125H12.2083C12.7884 10.8125 13.3448 11.043 13.755 11.4532C14.1653 11.8634 14.3958 12.4198 14.3958 13C14.3958 13.5802 14.1653 14.1366 13.755 14.5468C13.3448 14.957 12.7884 15.1875 12.2083 15.1875Z" />
		</svg>
	);
}

export function ItalicIcon({ className }: IClassName) {
	return (
		<svg
			width="21"
			height="21"
			viewBox="0 0 21 21"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm(className)}
		>
			<path d="M12.8337 17.1673H6.16699V15.5007H8.60616L10.3695 5.50065H7.83366V3.83398H14.5003V5.50065H12.0612L10.2978 15.5007H12.8337V17.1673Z" />
		</svg>
	);
}

export function UnderlineIcon({ className }: IClassName) {
	return (
		<svg
			viewBox="0 0 20 20"
			version="1.1"
			id="svg321"
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm(className)}
		>
			<defs id="defs325" />
			<path
				d="m 6.7427148,3.40681 v 7.19425 c 0,0.844767 0.1785202,1.547345 0.5342587,2.107734 0.5290465,0.844766 1.419044,1.267747 2.6725981,1.267747 1.5024414,0 2.5240484,-0.456438 3.0648224,-1.370505 0.290584,-0.497062 0.436529,-1.164989 0.436529,-2.004976 V 3.40681 h 1.799541 v 6.5370776 c 0,1.4314414 -0.21631,2.5331034 -0.650232,3.3037874 -0.79748,1.405155 -2.299921,2.107733 -4.508625,2.107733 -2.2087055,0 -3.7085403,-0.702578 -4.4982011,-2.107733 C 5.1594833,12.476991 4.943174,11.375329 4.943174,9.9438876 V 3.40681 Z M 2.9885677,17.745127 H 17.322348 v 1.194861 H 2.9885677 Z"
				id="path319"
			/>
		</svg>
	);
}

export function MoreIcon2({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048]', className)}
		>
			<path
				d="M4.16667 8.8335C3.25 8.8335 2.5 9.5835 2.5 10.5002C2.5 11.4168 3.25 12.1668 4.16667 12.1668C5.08333 12.1668 5.83333 11.4168 5.83333 10.5002C5.83333 9.5835 5.08333 8.8335 4.16667 8.8335Z"
				strokeWidth="1.2"
			/>
			<path
				d="M15.8334 8.8335C14.9167 8.8335 14.1667 9.5835 14.1667 10.5002C14.1667 11.4168 14.9167 12.1668 15.8334 12.1668C16.7501 12.1668 17.5001 11.4168 17.5001 10.5002C17.5001 9.5835 16.7501 8.8335 15.8334 8.8335Z"
				strokeWidth="1.2"
			/>
			<path
				d="M9.99992 8.8335C9.08325 8.8335 8.33325 9.5835 8.33325 10.5002C8.33325 11.4168 9.08325 12.1668 9.99992 12.1668C10.9166 12.1668 11.6666 11.4168 11.6666 10.5002C11.6666 9.5835 10.9166 8.8335 9.99992 8.8335Z"
				strokeWidth="1.2"
			/>
		</svg>
	);
}

export function LinkIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048]', className)}
		>
			<path
				d="M12.4917 15.0832H13.75C16.2667 15.0832 18.3334 13.0248 18.3334 10.4998C18.3334 7.98317 16.275 5.9165 13.75 5.9165H12.4917"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.50008 5.9165H6.25008C3.72508 5.9165 1.66675 7.97484 1.66675 10.4998C1.66675 13.0165 3.72508 15.0832 6.25008 15.0832H7.50008"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.66675 10.5H13.3334"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function AddIcon({ className }: IClassName) {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.5 7H10.5"
				className={clsxm('stroke-[#292D32]', className)}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 10.5V3.5"
				className={clsxm('stroke-[#292D32]', className)}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function DocumentUploadIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm(className)}
		>
			<path
				d="M9 17V11L7 13"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 11L11 13"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
