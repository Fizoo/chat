import {createReducer, on} from "@ngrx/store";

import {UserActions} from "./actions";
import {User} from "../model/users";

export interface IUser {
  data: User[]
  loading: boolean
  error: any
  activeUser:number|null
}

const initialState: IUser = {
  data: [],
  loading: false,
  error: null,
  activeUser:null
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers,
    state => ({
      ...state,
      loading: true,
      error: null,
      activeUser:null
    })),
  on(UserActions.loadUsersSuccess,
    (state, {users}) => ({
      ...state,
      data: users,
      loading: false,
      activeUser: users[0].id
    })),
  on(UserActions.loadUsersFailure,
    (state, {error}) => ({
      ...state,
      error,
      loading: false
    })),
  on(UserActions.addMessagesOfUser,
    (state, {message}) => {

      return ({
        ...state,
        data: [...state.data].map(el => el.id === state.activeUser ? {
          ...el,
          message: [...el.message,message]
        } : el)
      })
    })
)
