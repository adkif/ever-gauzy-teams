import {
	CreateReponse,
	DeleteReponse,
	IIssueTypesCreate,
} from '@app/interfaces';
import api from '../axios';

export function createIssueTypeAPI(data: IIssueTypesCreate, tenantId?: string) {
	return api.post<CreateReponse<IIssueTypesCreate>>('/issue-types', data, {
		headers: {
			'Tenant-Id': tenantId,
		},
	});
}

export function editIssueTypeAPI(
	id: string,
	data: IIssueTypesCreate,
	tenantId?: string
) {
	return api.put<CreateReponse<IIssueTypesCreate>>(`/issue-types/${id}`, data, {
		headers: {
			'Tenant-Id': tenantId,
		},
	});
}

export function deleteIssueTypeAPI(id: string) {
	return api.delete<DeleteReponse>(`/issue-types/${id}`);
}

export function getIssueTypeList(
	tenantId: string,
	organizationId: string,
	activeTeamId: string | null
) {
	return api.get(
		`/issue-types?tenantId=${tenantId}&organizationId=${organizationId}&activeTeamId=${activeTeamId}`
	);
}
