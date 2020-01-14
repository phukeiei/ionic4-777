import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceFeeService {
  url = 'http://localhost:3000/costPool';
  apiKey = '';
  constructor(private http: HttpClient) { }

  public getBySugId(id=null) {
    return this.http.get(`${this.url}/getBySugId/${id}/`);
  }

  public updateIsActiveByReference(id, ref) {
    let data = {
      scp_sug_id: id,
      reference: ref
    }
    return this.http.put(`${this.url}/updateIsActiveByReference/`, data);
  }
}
