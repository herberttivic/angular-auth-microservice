import { Component } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatCardModule, FormLoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
