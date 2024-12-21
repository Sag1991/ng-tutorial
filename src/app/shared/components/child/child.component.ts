import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Output } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { EventEmitter } from 'stream';
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
        this.fetchData();
    }

    fetchData(): void {
        this.homeService.getMethod().subscribe({
            next: (res) => {
                this.fetchedData = res;
                console.log('Data:-', this.fetchedData.data);
                this.sharedService.updateData(this.fetchedData.data)
            },
            error: (err) => {
                console.log('Facing the error', err);
            }
        });
    }

    redirectToBack() {
        this.router.navigate(['/parent']);
    }
}
