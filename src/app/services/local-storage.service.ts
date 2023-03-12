import { Injectable } from '@angular/core';

export enum LocalStorageKeys {
  IMG = 'imgOwner',
  AUTH = 'auth'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

    public get<T>(key: LocalStorageKeys): T {
        const data = localStorage.getItem(key);

        return (data) ? JSON.parse(data) : null;
    }

    public set(key: LocalStorageKeys, data: any): void {
        const value = JSON.stringify(data);
        localStorage.setItem(key, value);
    }

    public remove(key: LocalStorageKeys): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
