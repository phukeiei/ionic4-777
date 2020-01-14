import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  swmUserurl = 'http://localhost:3000/user';
  swmCostRegisterUrl = "http://localhost:3000/costRegister";
  hrPrefixUrl = 'http://localhost:3000/prefix';
  hrPersonUrl = 'http://localhost:3000/person';
  apiKey = '';
  constructor(private http: HttpClient) { }

  public getAllPrefix() {
    return this.http.get(`${this.hrPrefixUrl}`);
  }

  public getPersonDataById(id=null) {
    return this.http.get(`${this.hrPersonUrl}/${id}`);
  }

  public getCostRegisterByAge(age=null) {
    return this.http.get(`${this.swmCostRegisterUrl}/getCostRegisterByAge/${age}`);
  }

  public getActiveCostRegister() {
    return this.http.get(`${this.swmCostRegisterUrl}`);
  }

  public getLastUserCode() {
    return this.http.get(`${this.swmUserurl}/getLastUserCode`);
  }

  public getUserDataByPsId(id = null) {
    return this.http.get(`${this.swmUserurl}/getUserDataByPsId/${id}`);
  }

  public insert(su_ps_id, 
                su_code, su_tel, 
                su_birthday,
                su_work,
                su_workplace,
                su_tel_contact,
                su_contact_pf_id,
                su_contact_fname,
                su_contact_lname,
                su_ss_id,
                su_create_date,
                su_expire_date,
                su_update_date,
                su_anit_cost) {
    let data = {
      su_ps_id: su_ps_id,
      su_code: su_code,
      su_tel: su_tel,
      su_birthday: su_birthday,
      su_work: su_work,
      su_workplace: su_workplace,
      su_tel_contact: su_tel_contact,
      su_contact_pf_id: su_contact_pf_id,
      su_contact_fname: su_contact_fname,
      su_contact_lname: su_contact_lname,
      su_ss_id: su_ss_id,
      su_expire_date: su_expire_date,
      su_create_date: su_create_date,
      su_update_date: su_update_date,
      su_anit_cost: su_anit_cost
    }
    return this.http.post(`${this.swmUserurl}/`, data);
  }
}
