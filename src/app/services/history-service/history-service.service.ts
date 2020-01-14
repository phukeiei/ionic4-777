import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  url = 'http://localhost:3000/attend';
  apiKey = '';

  constructor(private http: HttpClient) { }

  public getDataByPsId(id=null) {
    return this.http.get<any[]>(`${this.url}/getDataByPsId/${id}`);
  }
}
