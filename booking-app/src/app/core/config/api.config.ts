export interface BaseResponseApi<T> {
    data: T;
    usermessage: string;
    devmessage: string;
    statusCode: number;
}


export const CommonSlugs = {
  } as const;
  
  export const AuthSlugs = {
    LoginStudent: 'abc',
    LoginOther: '/auth/login',
  } as const;
  
  export const AdminSlugs = {
    CreateUser: 'createUser',
    DeleteUser: 'deleteUser',
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


