import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUser} from "./reducer";
import {Message, User} from "../model/users";

export namespace UserSelectors{

  export const getUserState = createFeatureSelector<IUser>('user');

  export const getAllUsers = createSelector(
    getUserState,
    (state: IUser) => state.data
  );

  export const getMessages=createSelector(
    getUserState,
    (state)=>{
      let messages=state.data.find(el=>el.id ===state.activeUser)
      return messages?messages.message:[]
    }
  )

  //TODO: change selectActiveUser
  export const selectActiveUser = createSelector(
    getUserState,
    (state: IUser) => state.data[0]
  );

  export const getActiveUserMessages = createSelector(
    selectActiveUser,
    (user: User): Message[] => user?.message
  );
}




