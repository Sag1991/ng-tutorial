import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private sharedData = new BehaviorSubject<any>(null);
    sharedData$ = this.sharedData.asObservable();

    updateData(data: any) {
        this.sharedData.next(data);
    }
}
