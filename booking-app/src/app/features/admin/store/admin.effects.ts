import { inject } from "@angular/core";
import { UserService } from "../../../core/services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AdminAction from './admin.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";


export const loadUsers = createEffect(
    (action$ = inject(Actions), userService = inject(UserService)) => 
        action$.pipe(
        ofType(AdminAction.loadUsers),
        mergeMap(payload => userService.getUsers()),
        map(({ items, pageIndex, pageSize, totalCount }) => {
            return AdminAction.loadUsers_success({ user: items, pagination: { PageIndex: pageIndex, pageSize: pageSize, totalCount: totalCount } })
        }),
        catchError((error:Error) => of(AdminAction.loadUser_failure({ error: error.message })))
    ),
    {
        dispatch: true,
        functional: true
    }
)


export const loadFilterUser = createEffect(
    (action$ = inject(Actions), userService = inject(UserService)) => 
        action$.pipe(
            ofType(AdminAction.filterUsers),
            mergeMap(({filter}) => userService.filterUsers(filter.search, filter.orderBy, filter.orderByDesc, filter.thenBy, filter.thenByDesc)),
            map(({items, pageIndex, pageSize, totalCount}) =>{
                return AdminAction.loadUsers_success({ user: items, pagination: { PageIndex: pageIndex, pageSize: pageSize, totalCount: totalCount } })
            }),
            catchError((error:Error) => of(AdminAction.loadUser_failure({ error: error.message })))
        ),
        {
            functional: true,
            dispatch: true
        }
)


// export const movePaginationListUser = createEffect()
