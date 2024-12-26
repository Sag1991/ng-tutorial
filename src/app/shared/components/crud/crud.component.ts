import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-crud',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
    getUserData: any = {};
    homeService = inject(HomeService);

    ngOnInit(): void {
        this.getUsersRecords();
    }

    getUsersRecords(): void {
        this.homeService.getUserData().subscribe({
            next: (data: any) => {
                console.log("Users Records:-", data);
                if (data && data.data && Array.isArray(data.data)) {
                    this.getUserData = data.data.map((item: any) => {
                        return {
                            userId: item.userId,
                            userName: item.userName,
                            password: item.password,
                            projectName: item.projectName,
                            fullName: item.fullName,
                            createdDate: item.createdDate,
                            role: item.role
                        }
                    });
                    console.log("this.getUserData", this.getUserData);
                } else {
                    console.log("Error in data!");
                }
            },
            error: (err) => {
                console.log("Error while fetching the User records!", err);
            }
        })
    }
}
