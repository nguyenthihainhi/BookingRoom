import { IDummy } from ".";

export interface ItableColumn {
    field: string,
    header: string,
    sortable: boolean
}

export interface ItableItem extends IDummy {

}


// config css dynamic 
export const cellStyles: { [key: string]: IDummy } = {
    status: {
        'hoạt động': 'status-style-cell',
        'không hoạt động': 'iStatus-style-cell'
    },
    role: {
        'sinh viên': 'student-style-cell',
        'nhân viên': 'staff-style-cell',
        'nhân viên quản lý': 'headstaff-style-cell'
    },
};
