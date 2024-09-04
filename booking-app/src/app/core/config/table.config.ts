import { IDummy } from "../interfaces/anonymous.interface";
import { USER_ROLE } from "../utils/constant";





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
