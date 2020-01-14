import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfirmRegisterService {
  url = 'http://localhost:3000/user';
  apiKey = '';
  constructor(private http: HttpClient) { }

  public getUserListByStatusId(id=null) {
    return this.http.get(`${this.url}/getUserListByStatusId/${id}`);
  }

  public updateStatusById(id=null, su_ss_id) {
    let data = {
      su_ss_id: su_ss_id
    }
    return this.http.put(`${this.url}/updateStatusById/${id}`, data);
  }

  public deleteById(id=null) {
    return this.http.delete(`${this.url}/deleteById/${id}`);
  }
}
