import { USER_ROLE } from "../utils/constant";
import { IHistoryRoom } from "./Room.config";

export interface ILoginRequest {
  email: string;
  password: string;
}


export interface IAccount<T> {
  name: string;
  phone: string;
  email: string;
  address: string;
  password?: string;
  role: USER_ROLE;
  isActive: boolean;
  deletedAt?: Date | null;
  status: boolean;
  slug?: string;
  avatar?: string;
  historyRoom?: IHistoryRoom,
  profile?: T;
}


export interface IStudentProfile {
  major: string;
  keyYear: string;
  graduationYear: number;
  codeStudent?: string;
}

export interface IStaffProfile {
  department: string;
  position: string | 'Nhân viên quèn';
  codeStaff?: string;
}

export interface IHeadStaffProfile {
  department: string;
  leadershipRole: string | 'Nhân viên quản lý';
  codeStaff?: string;
}
