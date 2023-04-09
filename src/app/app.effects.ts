import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserActions, UserNames} from "./store/actions";
import {catchError, map, Observable, of, switchMap, tap} from "rxjs";
import {FireDatabaseService} from "./services/fireDatabase.service";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
              private database:FireDatabaseService ) {}

  loadUsers$:Observable<any> =createEffect(()=>this.actions$.pipe(
    ofType(UserNames.LoadUsers),
    tap(el=>console.log('effect',el)),
    switchMap(()=>this.database.fetchAllUsers().pipe(
      map(users=>UserActions.loadUsersSuccess({users})),
      catchError(error=>of(UserActions.loadUsersFailure({error}))),
      tap((el:any)=>console.log(el.users))
      ))
    )

  )
}
