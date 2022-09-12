
import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private ApiUrl = 'http://localhost:3000/admin';
  private Http_Headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}
  constructor(
    private http: HttpClient,

  ) { }

  getAllAdmins(): Observable<any>{
    return  this.http.get<any>(this.ApiUrl);
  }


  deleteAdmin(id:any): Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}/`+id)

  }

  createAdmin(admin:any): Observable<Admin[]> {
    return this.http.post<Admin[]>(`${this.ApiUrl}`, admin )
  }

  updateAdmin(id:any, admin:any): Observable<Admin[]> {
    return this.http.patch<Admin[]>(`${this.ApiUrl}/`+id, admin)
  }

  getAdmin(id:any, admin?:any): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/`+id, admin)

  }

}
