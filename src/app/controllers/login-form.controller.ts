import { Injectable } from '@angular/core';
import { LoginFormService } from '../services/login-form.service';
import { FormLoginDto } from '../dtos/form-login-dto';
import {
  HttpGet,
  HttpPost,
  HttpPut,
  HttpResponse,
  JSONData,
  Quark,
  Url,
} from 'sol-request-angular/dist/comunicacao';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginFormController {
  constructor(private service: LoginFormService) {}

  async login(form: FormLoginDto) {
    const data = this.service.requestAdapter(form);
    let quark = new Quark(
      new HttpPost({
        url: new Url({
          id: 'auth/login',
          environment: environment,
        }),
        data: new JSONData(data),
      }),
      new HttpResponse(FormLoginDto)
    );
    return await quark.call();
  }
}
