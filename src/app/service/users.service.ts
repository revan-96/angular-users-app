import { Injectable } from '@angular/core';
import { IUser } from '../interface/iuser.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://192.168.43.210:3000/users');
  }

  getUsersByID(id: string | null): Promise<IUser> {
    return this.http.get<IUser>('http://192.168.43.210:3000/users' + '/' + id).toPromise();
  }
}
