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

    userDetails: any = {
        userId: 0,
        userName: "",
        emailId: "",
        fullName: "",
        role: "",
        createdDate: "2025-01-06T16:20:32.302Z",
        password: "",
        projectName: "",
        refreshToken: "",
        refreshTokenExpiryTime: "2025-01-06T16:20:32.302Z"
    }

    ngOnInit(): void {
        this.getUsersRecords();
        this.getUpdatedRecords();
    }

    getUsersRecords(): void {
        this.homeService.getUserData().subscribe({
            next: (data: any) => {
                console.log("Users Records:-", data);
                if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
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

    getUpdatedRecords() {
        this.homeService.getUpdateUserRecords().subscribe({
            next: (res) => {
                console.log("Updated User Data:-", res);
            },
            error: (err) => {
                console.log("Error", err);
            }
        })
    }

    addUserRecords(): void {
        this.homeService.postUserData(this.userDetails).subscribe({
            next: (res) => {
                if (res.result) {
                    console.log("Details Added Succesfully!", res.message);
                    alert("Details Added Succesfully!");
                    this.getUsersRecords();
                } else {
                    console.log("Failed to Add Data!", res.message);
                    alert("Failed to Add Data!");
                }
            }, error: (err) => {
                console.log("Error while adding the user details.", err);
            }
        })
    }
}
