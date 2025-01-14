import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HomeService } from '../../../core/services/home.service';
import { Router } from '@angular/router';

interface Login {
    emailId: string,
    password: string,
}

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginObj: Login = {
        emailId: '',
        password: ''
    }

    router = inject(Router);
    homeService = inject(HomeService);

    onSubmit() {
        this.homeService.postLogin(this.loginObj).subscribe({
            next: (res) => {
                alert(res.message)
                console.log(res.message);
                localStorage.setItem("token", res.data.token);
                this.router.navigate(['/crud']);
            },
            error: (err) => {
                console.log("Error while Login", err);
            }
        })
    }
}
