import { createAction, props } from "@ngrx/store";
import { filterUser, pagination, User } from "./admin.states";

export const LOAD_LISTUSER = '[Admin] list user init';
export const LOAD_LISTUSER_SUCCESS = '[Admin] list user success';
export const LOAD_LISTUSER_FAILURE = '[Admin] list user failure';
export const CHOOSE_FILTER_USERS = '[Admin] applyFilter';
export const PAGINATION_LISTUSER = '[Admin] pagination list user';

export const loadUsers = createAction(LOAD_LISTUSER);
export const loadUsers_success = createAction(LOAD_LISTUSER_SUCCESS, props<{user: User[], pagination: pagination}>());
export const loadUser_failure = createAction(LOAD_LISTUSER_FAILURE, props<{error: string}>());

export const filterUsers = createAction(CHOOSE_FILTER_USERS, props<{filter: filterUser}>());
export const paginationListUser = createAction(PAGINATION_LISTUSER, props<{pagination: pagination}>())