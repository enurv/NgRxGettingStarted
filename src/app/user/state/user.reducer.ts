import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";
import * as UserActions from './user.actions';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: false,
    currentUser: undefined
};

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);