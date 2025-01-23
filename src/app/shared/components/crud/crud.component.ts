import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-crud',
    imports: [
        CommonModule,
        FormsModule,
        TableModule
    ],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
    getUserData: any[] = [];

    homeService = inject(HomeService);

    ngOnInit(): void {
        this.getUpdatedRecords();
    }

    getUpdatedRecords() {
        this.homeService.getUpdateUserRecords().subscribe({
            next: (res: any) => {
                console.log("Updated User Data:-", res);
                if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
                    this.getUserData = res.data.map((item: any) => {
                        return {
                            userId: item.userId,
                            firstName: item.firstName,
                            lastName: item.lastName,
                            email: item.emailId,
                            mobile: item.mobileNo
                        }
                    });
                    console.log("User Data:-", this.getUserData);
                } else {
                    console.log("Error in formating the data");
                }
            },
            error: (err) => {
                console.log("Error", err);
            }
        })
    }
}
