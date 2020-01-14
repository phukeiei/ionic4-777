import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url = 'http://localhost:3000/ses';
  apiKey = '';
  public username = '';
  public userId: Number;
  public password = '';
  public status = '';
  public appId: Number;
  public reState: any;
  public regId: any;
  public crsId: any;
  public editTab: Boolean;
  constructor(private http: HttpClient) {
    this.clearAppId();
    this.reState = false;
    this.editTab = false;
  }
  public clearAppId() {
    this.appId = null;
  }
  public setAppId(id) {
    this.appId = id;
  }
  public getSession() {
    return {
      id: this.userId,
      username: this.username,
      password: this.password,
      status: this.status
    };
  }
  public setSession(usr = null, pas = null, sta = null, id = null) {
    this.username = usr;
    this.password = pas;
    this.status = sta;
    this.userId = id;

    // let data = {
    //   username: this.username,
    //   password: this.password
    // }
    // return this.http.post(`${this.url}`, data)
  }

  public check() {
    return this.http.get(`${this.url}`);
  }

  public logout() {
    return this.http.delete(`${this.url}`);
  }
}
