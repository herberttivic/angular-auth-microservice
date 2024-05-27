import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormLoginDto } from '../../../dtos/form-login-dto';
import { LoginFormController } from '../../../controllers/login-form.controller';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIcon,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  constructor(
    private fb: FormBuilder,
    private controller: LoginFormController
  ) {}
  form = this.fb.group({
    email: this.fb.control('', Validators.required),
    senha: this.fb.control('', Validators.required),
  });

  handleSubmit() {
    const validForm = this.validate();
    if (!validForm) {
      return;
    }
    this.controller.login(validForm);
  }

  validate(): FormLoginDto | null {
    const { email, senha } = this.form.value;
    if (!email) {
      return null;
    }

    if (!senha || senha.length < 6) {
      return null;
    }

    return { email, senha };
  }
}
