import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-layout',
    imports: [
        RouterOutlet,
        ButtonModule
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

    router = inject(Router)

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
