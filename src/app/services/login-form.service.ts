import { Injectable } from '@angular/core';
import { FormLoginDto } from '../dtos/form-login-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor() {}

  requestAdapter(data: FormLoginDto) {
    return {
      email: data.email,
      password: data.senha,
    };
  }
}
