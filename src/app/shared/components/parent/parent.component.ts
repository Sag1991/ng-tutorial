import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../core/services/shared.service';

@Component({
    selector: 'app-parent',
    imports: [
        CommonModule
    ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
    public fetchedDataFromChild: any = {};
    private router = inject(Router);
    sharedService = inject(SharedService)

    ngOnInit(): void {
        this.sharedService.sharedData$.subscribe(data => {
            if (data) {
                this.fetchedDataFromChild = data;
                console.log("fetchedDataFromChild", data);
            }
        })
    }

    redirectToChild() {
        this.router.navigate(['/child']);
    }
}
