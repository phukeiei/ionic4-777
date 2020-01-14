import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditProfileSwmService {
  url = 'http://localhost:3000/user';
  hrPrefixUrl = 'http://localhost:3000/prefix';
  apiKey = '';

  constructor(private http: HttpClient) { }

  public getUserDataByPsId(id=null) {
    return this.http.get(`${this.url}/getUserDataByPsId/${id}`);
  }

  public getAllPrefix() {
    return this.http.get(`${this.hrPrefixUrl}`);
  }

  public updateById(id=null, psData) {
    let data = {
     su_work: psData.su_work,
     su_workplace: psData.su_workplace,
     su_tel_contact: psData.su_tel_contact,
     su_contact_pf_id: psData.su_contact_pf_id,
     su_contact_fname: psData.su_contact_fname,
     su_contact_lname: psData.su_contact_lname,
     su_update_date: psData.su_update_date
    }
    return this.http.put(`${this.url}/updateById/${id}`, data);
  }
}
