import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProjectAuth } from '../api/dto/Project.type';
import { AuthService } from '../auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  authenticateFormControl = new FormGroup({
    key: new FormControl(''),
    passKey: new FormControl(''),
  })

  errorMessage = '';

  onSubmit(): void {
    const payload = {
      key: this.authenticateFormControl.get('key')?.valid ? this.authenticateFormControl.get('key')?.value?.toUpperCase() : null,
      passKey: this.authenticateFormControl.get('passKey')?.valid ? this.authenticateFormControl.get('passKey')?.value?.toUpperCase() : null,
    }
    this.authService
      .authenticate(
        payload.key || '',
        payload.passKey || ''
      )
      .subscribe({
        next: () => {

        },
        error: response => {
          console.log(response.error);
        }
      });
  }
}
