import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedService } from '../../../core/services/shared.service';
import { HomeService } from '../../../core/services/home.service';

@Component({
    selector: 'app-parent',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
    fetchedData: any = {};
    private router = inject(Router);
    sharedService = inject(SharedService);
    homeService = inject(HomeService);

    ngOnInit(): void {
        this.fetchRecords();
    }

    fetchRecords() {
        this.homeService.getRecords().subscribe({
            next: (res: any) => {
                console.log("Fetched Data", res);
                if (res && res.data && Array.isArray(res.data)) {
                    this.fetchedData = res.data.map((item: any) => {
                        return {
                            queryId: item.queryId,
                            name: item.name,
                            cityy: item.city,
                        }
                    });
                    this.sharedService.updateData(this.fetchedData);
                } else {
                    console.log("No valid data found in response.");
                    this.fetchedData = [];
                }
            },
            error: (err) => {
                console.log("Error while fetching the data:", err);
            }
        })
    }

    redirectToChild() {
        this.router.navigate(['/child']);
    }
}
