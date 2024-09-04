export interface BaseResponseApi<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
  errors: string;
}

export interface BaseResponseRecords<T> {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  items: T[];
}



export const CommonSlugs = {
  } as const;
  
  export const AuthSlugs = {
    LoginStudent: 'abc',
    LoginOther: 'auth/login',
  } as const;
  
  export const AdminSlugs = {
    CreateUser: 'createUser',
    DeleteUser: 'deleteUser',
    LoadUser: 'user'
  } as const;
  
  export const StudentSlugs = {
    LoginForStudent: 'loginForStudent',
    GetCourses: 'getCourses',
  } as const;
  
  export const StaffSlugs = {
    GetStaffList: 'getStaffList',
    AssignTask: 'assignTask',
  } as const;
  
  export type ApiType = 'common' | 'auth' | 'admin' | 'student' | 'staff';


