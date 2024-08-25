import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-touch-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './in-touch-form.component.html',
  styleUrl: './in-touch-form.component.scss'
})
export class InTouchFormComponent {
  http = inject(HttpClient);
  router = inject(Router);

  getInTouchForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    tel: new FormControl('', [Validators.minLength(7)]),
    textToUs: new FormControl('', [Validators.minLength(5)])
  });

  submit() {
    if (this.getInTouchForm.valid) {
      this.http.post('http://localhost:3000/send-email', this.getInTouchForm.value, { responseType: 'text' })
        .subscribe(
          response => {
            console.log('Succesfully', response);
            this.getInTouchForm.reset();
            this.router.navigateByUrl('');
          },
          error => {
            console.error('Error', error);
          }
        );
    }
  }
}
