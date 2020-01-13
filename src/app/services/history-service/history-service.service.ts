import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  url = 'http://localhost:3000/attend';
  apiKey = '';

  constructor(private http: HttpClient) { }

  public getDataByPsId(id=null) {
    return this.http.get(`${this.url}/getDataByPsId/${id}`);
  }
}
