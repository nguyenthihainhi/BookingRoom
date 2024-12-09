import { createFeature, createSelector } from "@ngrx/store";
import { AdminReducer } from "./admin.reducers";


const adminsKey = 'feature_admin';

export const adminsFeature = createFeature({
    name: adminsKey,
    reducer: AdminReducer,
    extraSelectors: ({ selectUser, selectFilter }) => {
        const selectFilterUsers = createSelector(
            selectUser, selectFilter,
            (users, optional) => users.filter(user => user.email.includes(optional?.search!!))
        );

        return { selectFilterUsers }
    }
})



export const { selectUser, selectFilter, selectPagination, selectStatus, selectErrorMessage, selectFilterUsers } = adminsFeature;