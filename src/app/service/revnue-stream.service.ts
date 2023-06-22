import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RevnueStreamService {
  private baseUrl ='http://10.82.11.8:8080/CaseTools/rest/case'

  constructor(private http: HttpClient) { }

  getAllRevenue(): Observable<any> {
    const url = `${this.baseUrl}/listrev`;
    return this.http.get<any>(url);
  }

  deleteRevenueStream(id:any) {
   
   
  
    return this.http.delete<any>(`${this.baseUrl}/${id}` );
  }

  addrevenue(revenuestream:any){
    return this.http.post(`${this.baseUrl}`,revenuestream);
  }

  public editrevenue(id:any,revenuestream:any){
    return this.http.put(`${this.baseUrl}/editrev/${id}`,revenuestream);
  }


  // deleteEntity(id: number): Observable<void> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<void>(url);
  // }
}
