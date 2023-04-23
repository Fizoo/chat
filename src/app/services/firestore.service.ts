import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, map, Observable, tap} from "rxjs";

class MyDataModel {
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<MyDataModel>('users');
  }

  // додати дані в Firestore
  public addData(data: MyDataModel): Observable<void> {
    return from(this.collection.add(data)).pipe(
      tap(el=>console.log(el)),
      map(() => {})
    );
  }

  // отримати всі дані з Firestore
  public getAllData(): Observable<MyDataModel[]> {
    return this.collection.valueChanges();
  }

  // отримати конкретні дані з Firestore
  public getDataById(id: string): Observable<any> {
    return this.collection.doc<MyDataModel>(id).valueChanges();
  }

  // оновити дані в Firestore
  public updateData(id: string, data: Partial<any>): Observable<void> {
    return from(this.collection.doc(id).update(data)).pipe(
      map(() => {})
    );
  }

  // видалити дані з Firestore
  public deleteData(id: string): Observable<void> {
    return from(this.collection.doc(id).delete()).pipe(
      map(() => {})
    );
  }
}
