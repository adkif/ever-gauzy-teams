import { IUser } from '@app/interfaces';
import { activeTeamState } from '@app/stores';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export function useIsMemberManager(user: IUser | undefined | null) {
	const [isTeamManager, setTeamManager] = useState(false);
	const activeTeam = useRecoilValue(activeTeamState);

	useEffect(() => {
		if (activeTeam) {
			const isM = activeTeam?.members.find((member) => {
				const isUser = member.employee.userId === user?.id;
				return isUser && member.role && member.role.name === 'MANAGER';
			});

			setTeamManager(!!isM);
		} else {
			setTeamManager(false);
		}
	}, [activeTeam, user]);

	return {
		isTeamManager,
		activeTeam,
	};
}
