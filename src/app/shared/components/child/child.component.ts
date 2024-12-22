import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { SharedService } from '../../../core/services/shared.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-child',
    imports: [
        CommonModule
    ],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
    public fetchedData: any = {};
    homeService = inject(HomeService)
    sharedService = inject(SharedService)
    router = inject(Router)

    ngOnInit(): void {
        this.fetchRecords()
    }

    fetchRecords(): void {
        this.homeService.getMethod().subscribe({
            next: (response) => {
                this.fetchedData = response;
                console.log("Fetched Data from the API:-", this.fetchedData.data);
                this.sharedService.updateData(this.fetchedData.data)
            },
            error: (err) => {
                console.log("Encountering the error during fetchimg the data from the APIs", err);
            }
        })
    }

    redirectToBack() {
        this.router.navigate(['/crud']);
    }
}
