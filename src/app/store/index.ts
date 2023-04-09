import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { User } from '../model/users';
import {IUser, userReducer} from "./reducer";

export interface State {
    user:IUser
}

export const reducers: ActionReducerMap<State> = {
    user:userReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
