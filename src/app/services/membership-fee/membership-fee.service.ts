import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembershipFeeService {
  url = 'http://localhost:3000/costRegister';
  apiKey = '';
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(`${this.url}/`);
  }

  public updateIsActiveByReference(reference) {
    let data = {reference: reference};
    return this.http.put(`${this.url}/updateIsActiveByReference`, data);
  }
}
