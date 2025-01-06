import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent {
    registrationForm!: FormGroup;
    constructor(
        private fb: FormBuilder
    ) {
        this.registrationForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            address: ['', Validators.required]
        })
    }

    onSubmit() {
        if (this.registrationForm.valid) {
            console.log('Form Data:', this.registrationForm.value);
            this.registrationForm.reset();
        } else {
            alert('Form is invalid!');
        }
    }
}
