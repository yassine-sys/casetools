import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaruleService {
  private baseUrl ='http://127.0.0.1:8080/CaseTools-0.0.1-SNAPSHOT/rest/case'


  constructor(private http: HttpClient) { }

  getAllRarles(): Observable<any> {
    const url = `${this.baseUrl}/listrarule`;
    return this.http.get<any>(url);
  }

  deleteRarule(id:any) {
    return this.http.delete<any>(`${this.baseUrl}/deleterarule/${id}` );
  }

  public editRarule(id:any,rule:any){
    return this.http.put(`${this.baseUrl}/editrarule/${id}`,rule);
  }

  getAllParams(): Observable<any> {
    const url = `${this.baseUrl}/listparam`;
    return this.http.get<any>(url);
  }

  deleteParam(id:any) {
    return this.http.delete<any>(`${this.baseUrl}/deleteparam/${id}` );
  }
  public editParam(id:any,param:any){
    return this.http.put(`${this.baseUrl}/editparam/${id}`,param);
  }

  getAllReports(): Observable<any> {
    const url = `${this.baseUrl}/reportrarule`;
    return this.http.get<any>(url);
  }
//rapporet el kol
  getAllRaports(): Observable<any> {
    const url = `${this.baseUrl}/allrapports`;
    return this.http.get<any>(url);
  }

  deleteReport(id:any) {
    return this.http.delete<any>(`${this.baseUrl}/deletereports/${id}` );
  }

  addrule(rule:any){
    return this.http.post(`${this.baseUrl}/addrarule`,rule);
  }

  addparam(param:any){
    return this.http.post(`${this.baseUrl}/addparam`,param);
  }

  addreport(rapport:any){

    return this.http.post(`${this.baseUrl}/addreportrarule`,rapport);

  }

  public editreport(id:any,rapport:any){
    return this.http.put(`${this.baseUrl}/editreport/${id}`,rapport);
  }





}
