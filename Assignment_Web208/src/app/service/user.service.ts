import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = `http://localhost:8080/api/users`
  constructor( private http : HttpClient) {}
  addUser(user : IUser) : Observable<IUser>{
    return this.http.post<IUser>(`${this.API_URL}`, user)
  }
}
