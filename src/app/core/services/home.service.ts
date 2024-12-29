import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    getRecords(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/BudgetPlanner/getAllQuery`)
    }

    getUserData(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/BusBooking/GetAllUsers`);
    }

    postUserData(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/BusBooking/AddNewUser`, userData);
    }
}
