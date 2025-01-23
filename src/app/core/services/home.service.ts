import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private baseUrlPrimary = environment.apiUrlPrimary;
    private baseUrlSecondary = environment.apiUrlSecondary;

    constructor(
        private http: HttpClient
    ) { }

    getUpdateUserRecords(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrlSecondary}/User/GetAllUsers`);
    }

    postLogin(credential: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrlSecondary}/User/Login`, credential);
    }
}
