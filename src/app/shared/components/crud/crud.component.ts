import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';

@Component({
    selector: 'app-crud',
    imports: [
        CommonModule
    ],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
    dataFromChild: any = {};
    sharedService = inject(SharedService);

    ngOnInit(): void {
        this.sharedService.sharedData$.subscribe({
            next: (data) => {
                if (data) {
                    this.dataFromChild = data;
                    console.log("Receieved data from the child", this.dataFromChild);
                }
            },
            error: (err) => {
                console.log("Error", err);
            }
        })
    }
}
