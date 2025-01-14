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

    getRecords(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrlPrimary}/BudgetPlanner/getAllQuery`)
    }

    getUserData(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrlPrimary}/BusBooking/GetAllUsers`);
    }

    getUpdateUserRecords(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrlSecondary}/User/GetAllUsers`);
    }

    postUserData(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrlPrimary}/BusBooking/AddNewUser`, userData);
    }

    postLogin(credential: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrlSecondary}/User/Login`, credential);
    }
}
