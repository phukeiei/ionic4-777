import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login';
  apiKey = '';
  public status: any

  constructor(private http: HttpClient) { }

  checkUser(usr = null, pas = null) {
    return this.http.get<any>(`${this.url}/${usr}/${pas}`)
  }
}
