import { AdminSlugs, ApiType, AuthSlugs, CommonSlugs, StaffSlugs, StudentSlugs } from "../config/api.config";

export enum STRING {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export const ROUTERADMIN: BREADCRUMB_ADMIN = {
  'dashboard': 'Trang điều khiển',
  'dashboard/manage-user': 'Người dùng',
  'dashboard/manage-role': 'Vai trò',
  'dashboard/manage-build': 'Tòa nhà'
}

export interface BREADCRUMB_ADMIN {
  [key: string]: string
}

export enum USER_ROLE {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  HEADSTAFF = 'HEADSTAFF',
  STUDENT = 'STUDENT',
}


export const ApiSlugs: Record<ApiType, Record<string, string>> = {
  common: CommonSlugs,
  auth: AuthSlugs,
  admin: AdminSlugs,
  student: StudentSlugs,
  staff: StaffSlugs,
};