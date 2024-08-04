import { USER_ROLE } from "../utils/constant"
import { icons } from "./icons.config"
import { IMenu } from "./menu.config"

export const ADMIN_DASHBOARD: (role: USER_ROLE) => IMenu[] = (role: USER_ROLE) => [
    {
        label: 'Quản lý người dùng',
        routerLink: '/admin/manage-user',
        icon: icons.arrowRight
    },
    {
        label: 'Quản lý vai trò',
        routerLink: '/admin/manage-role',
        icon: icons.arrowRight
    },
    {
        label: 'Quản lý tòa nhà',
        routerLink: '/admin/manage-build',
        icon: icons.arrowRight
    }
]