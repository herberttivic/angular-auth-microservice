import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LoginFormController } from '../../../controllers/login-form.controller';
import { validateFormLogin } from '../../../../tools/utils/validators/form-login-validate';
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
    private controller: LoginFormController,

    private _snackBar: MatSnackBar
  ) {}
  form = this.fb.group({
    email: this.fb.control('', Validators.required),
    senha: this.fb.control('', Validators.required),
  });

  async handleSubmit() {
    const validForm = validateFormLogin(this.form);
    if (!validForm) {
      return;
    }
    try {
      await this.controller.login(validForm);
    } catch (error: any) {
      const message = error?.message || 'Erro inesperado ao fazer o login.';
      this.alertError(message);
    }
  }

  alertError(message: string) {
    this._snackBar.open(message, 'OK');
  }
}
