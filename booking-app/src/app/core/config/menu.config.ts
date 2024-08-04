import { USER_ROLE } from "../utils/constant";

export interface IMenu {
    routerLink?: string,
    label: string,
    icon?: string,
    iconActive?: string,
    role?: USER_ROLE,
    children?: IMenu[];
}