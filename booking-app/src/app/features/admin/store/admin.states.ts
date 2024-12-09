

export interface pagination {
    pageSize: number,
    PageIndex: number,
    totalCount?: number
}

export interface filterUser {
    search?: string,
    orderBy?: string,
    orderByDesc?: boolean,
    thenBy?: string,
    thenByDesc?: boolean
}

export interface User  {
    id: string;
    phoneNumber: string;
    email: string;
    userName: string;
    passwordHash: string;
    dateOfBirth: Date;
    gender: boolean;
    role: string;
}


export type statusType = 'idle' | 'loading' | 'loaded' | 'error';
export interface UserState {
    status: statusType,
    errorMessage: string | null,
    user: User[],
    pagination: pagination,
    filter: filterUser | null
}