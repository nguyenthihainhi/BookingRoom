import { IDummy } from ".";
import { USER_ROLE } from "../utils/constant";

export interface ItableColumn {
    field: string,
    header: string,
    sortable: boolean
}



export interface ITableItem  extends IDummy {
}

export interface TableUser {
    id: string,
    name: string,
    email: string,
    phone: string,
    code?: string,
    gender: string,
    dateJoin: string,
    role: string,
    status?: string
}




// config css dynamic 
export const cellStyles: { [key: string]: IDummy } = {
    status: {
        'hoạt động': 'status-style-cell',
        'không hoạt động': 'iStatus-style-cell'
    },
    role: {
        [USER_ROLE.STUDENT]: 'student-style-cell',
        [USER_ROLE.STAFF]: 'staff-style-cell',
        [USER_ROLE.HEADSTAFF]: 'headstaff-style-cell'
    },
};
