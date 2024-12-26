import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
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
    receivedDataFromParent: any = {};
    sharedService = inject(SharedService)
    router = inject(Router)

    ngOnInit(): void {
        this.sharedService.sharedData$.subscribe({
            next: (res: any) => {
                if (res && res.length && Array.isArray(res)) {
                    this.receivedDataFromParent = res;
                    console.log("this.receivedDataFromParent", this.receivedDataFromParent);
                } else {
                    console.log("Error")
                }
            }, error: (err) => {
                console.log("Error during fetching the data from the parent", err);
            }
        })
    }

    redirectBack() {
        this.router.navigate(['/parent']);
    }
}
