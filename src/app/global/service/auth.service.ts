import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ConfigGlobalURL } from 'src/app/urlsistem/ConfigGlobalURL';
import { User } from '../interface/user';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    link: string;
    private subjUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    currentUser: User | null = null;

    constructor(
        private http: HttpClient,
        private url: ConfigGlobalURL
    ) {
        this.link = this.url.getApiUrl();
    }

    register(user: User): Observable<User> {
        return this.http.post<any>(`${this.link}oapi/signup`, user);
    }

    login(credentials: { cpf: string, password: string }): Observable<User> {
        return this.http.post<User>(`${this.link}oapi/login`, credentials)
            .pipe(
                tap((u: any) => {
                    const timestamp = Date.now().toString();
                    const randomString = Math.random().toString(36).substr(2, 8);

                    localStorage.setItem('token', timestamp + randomString + u.data.token);
                    this.subjLoggedIn$.next(true);
                    this.subjUser.next(u);
                    localStorage.setItem('userData', JSON.stringify(u));
                })
            );
    }

    getSwaggerAPI(api: string): Observable<string>{
      return this.http.get<any>(`${this.link}/${api}`)
    }

    isAuthenticated(): Observable<boolean> {
        return this.subjLoggedIn$.asObservable();
    }

    getUser(): Observable<User | null> {
        return this.subjUser.asObservable();
    }
}
