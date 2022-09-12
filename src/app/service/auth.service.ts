import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { APIResponse } from '../models/api-response';
import { Admin } from '../models/admin';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL: string = 'http://localhost:3000/admin';

    isLoggedIn: boolean = false;
    authToken?: string;

    constructor(private http: HttpClient, private router: Router) {
        this.autoLogin();
    }

    login(data: any): Observable<APIResponse<Admin & string>> {
        return this.http.post<APIResponse>(this.API_URL + '/login', data).pipe(tap((res) => {
            if (res.status === 'success') {
                this.isLoggedIn = true;
                this.authToken = res.data!['token'];
                this.saveToken(this.authToken);
            }
        }));
    }

    signup(data: any): Observable<APIResponse<Admin & string>> {
        return this.http.post<APIResponse>(this.API_URL + '/signup', data).pipe(tap((res) => {
            if (res.status === 'success') {
                this.isLoggedIn = true;
                this.authToken = res.data!['token'];
                this.saveToken(this.authToken);
                
            }
        }));
    }

    logout() {
        this.isLoggedIn = false;
        this.authToken = undefined;

        localStorage.removeItem('authToken');

        this.router.navigate(['/home']);
    }

    private autoLogin(): void {
        let authToken = localStorage.getItem('authToken');

        console.log(JSON.parse(localStorage.getItem('userInfo')!));

        if (authToken) {
            this.isLoggedIn = true;
            this.authToken = authToken;
        }
    }

    private saveToken(token: string): void {
        localStorage.setItem('authToken', token);

    }
}
