import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Roster } from '../models/roster';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private ApiUrl = "http://localhost:3000/roster";
  private Http_Headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(
    private http: HttpClient,

  ) { }

  getAllAgents(): Observable<any>{
    return  this.http.get<any>(this.ApiUrl);
  }


  deleteAgent(id:any): Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}/`+id)

  }

  createAgent(agent:any): Observable<Roster[]> {
    return this.http.post<Roster[]>(`${this.ApiUrl}`, agent )
  }

  updateAgent(id:any, agent:any): Observable<Roster[]> {
    return this.http.patch<Roster[]>(`${this.ApiUrl}/`+id, agent)
  }

  getAgent(id:any, agent?:any): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/`+id, agent)

  }



  // IMPLEMENT UPDATE AND GET SINGLE AGENT
}


