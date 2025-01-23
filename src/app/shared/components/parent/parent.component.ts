import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedService } from '../../../core/services/shared.service';

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
    private router = inject(Router);
    sharedService = inject(SharedService);

    ngOnInit(): void { }

    redirectToChild() {
        this.router.navigate(['/child']);
    }
}
