import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlerteService {

  private baseUrl ='http://127.0.0.1:8080/CaseTools-0.0.1-SNAPSHOT/rest/case'


  constructor(private http: HttpClient) { }


  getAllAlerts(): Observable<any> {
    const url = `${this.baseUrl}/listalertes`;
    return this.http.get<any>(url);
  }

  assignAlertUser(alerts:any){
    return this.http.post(`${this.baseUrl}/assignAlertUser`,alerts);
  }

  public closealert(id:any,alert:any){
    return this.http.put(`${this.baseUrl}/closealert/${id}`,alert);
  }






}
