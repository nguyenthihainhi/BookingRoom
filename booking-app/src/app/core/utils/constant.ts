export const environment = {
  apiUrl: "http://localhost:3000",
  google_clientID: "122263316773-rujio55kh3aqaqkbd85u7hbgfs4sujs3.apps.googleusercontent.com"
}

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


