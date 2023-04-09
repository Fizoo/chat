
import {createAction, props} from "@ngrx/store";
import {Message, User} from "../model/users";

export enum UserNames{
  //Users
  InitialState='[User] InitialState',
  LoadUsers='[User] loadUsers',
  LoadUsersSuccess='[User] Load Users Success',
  LoadUsersFailure='[User] Load Users Failure',

  GetAllUsers='[User]',
  AddUser='[User] AddUser',
  DeleteUser='[User] DeleteUser',
  GetMessagesOfUser='[User] GetMessagesOfUser',
  AddMessagesOfUser='[User] AddMessagesOfUser',


  //Auth
  Login='[Auth] login',
  Logout='[Auth] logout',

}


export namespace UserActions{

  export const initial=createAction(UserNames.InitialState);

  export const loadUsers = createAction(UserNames.LoadUsers);

  export const loadUsersSuccess = createAction(UserNames.LoadUsersSuccess, props<{ users: User[] }>());

  export const loadUsersFailure = createAction(UserNames.LoadUsersFailure, props<{ error: any }>());

  export const getAllUsers=createAction(UserNames.GetAllUsers)

  export const addUser=createAction(UserNames.AddUser,props<{user:User}>())

  export const deleteUser=createAction(UserNames.DeleteUser,props<{user:User}>())

  export const getMessagesOfUser=createAction(UserNames.GetMessagesOfUser,props<{user:User}>())

  export const addMessagesOfUser=createAction(UserNames.AddMessagesOfUser,props<{message:Message}>())
}
