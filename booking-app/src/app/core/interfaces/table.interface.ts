import { IDummy } from "./anonymous.interface"

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
