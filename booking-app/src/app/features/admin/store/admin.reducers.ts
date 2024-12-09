import { createFeature, createReducer, on } from "@ngrx/store";
import { statusType, UserState } from "./admin.states";
import * as userActions from './admin.actions';



const initialState: UserState = {
    user: [],
    errorMessage: null,
    status: 'idle',
    pagination: {
        PageIndex: 1,
        pageSize: 1,
        totalCount: 0
    },
    filter: null,
}


export const AdminReducer = createReducer(
    initialState,
    on(userActions.loadUsers, state => ({ ...state, status: 'loading' as statusType })),
    on(userActions.loadUsers_success, (state, action) => ({ ...state, user: action.user, pagination: action.pagination, status: 'idle' as statusType })),
    on(userActions.loadUser_failure, (state, action) => ({ ...state, errorMessage: action.error, status: 'error' as statusType })),
    on(userActions.filterUsers, (state, action) => ({ ...state, user: [], filter: action.filter, status: 'loading' as statusType })),
    on(userActions.paginationListUser, (state, action) => ({ ...state, user: [], pagination: action.pagination, status: 'loading' as statusType })),
)




