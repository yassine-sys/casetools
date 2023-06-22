import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaincontrolService {
  private baseUrl ='http://127.0.0.1:8080/CaseTools-0.0.1-SNAPSHOT/rest/case'

  constructor(private http: HttpClient) { }

  getAllDomainControl(): Observable<any> {
    const url = `${this.baseUrl}/listdom`;
    return this.http.get<any>(url);
  }

  deleteDomainControl(id:any) {
   
   
  
    return this.http.delete<any>(`${this.baseUrl}/deletedom/${id}` );
  }

  adddomain(domaincontrol:any){
    return this.http.post(`${this.baseUrl}/adddom`,domaincontrol);
  }

  public editdomain(id:any,domaincontrol:any){
    return this.http.put(`${this.baseUrl}/editdom/${id}`,domaincontrol);
  }

}
