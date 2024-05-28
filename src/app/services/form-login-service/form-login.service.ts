import { Injectable } from '@angular/core';
import { FormLoginDto, LoginResponseDto } from '../../dtos/form-login-dto';
import {
  HttpGet,
  HttpPost,
  HttpResponse,
  JSONData,
  Quark,
  Url,
} from 'sol-request-angular/dist/comunicacao';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormLoginService {
  constructor() {}

  async login(form: FormLoginDto): Promise<LoginResponseDto> {
    const data = this.adaptReq(form);
    let quark = new Quark(
      new HttpPost({
        url: new Url({
          id: 'login',
          environment: environment,
        }),
        data: new JSONData(data),
      }),
      new HttpResponse(new LoginResponseDto())
    );
    return await quark.call();
  }

  async verifyToken(token: string): Promise<LoginResponseDto> {
    let quark = new Quark(
      new HttpGet({
        url: new Url({
          id: '/me',
          environment: environment,
        }),
      }),
      new HttpResponse(new LoginResponseDto())
    );
    return await quark.call();
  }

  adaptReq(data: FormLoginDto) {
    return {
      email: data.email,
      password: data.senha,
    };
  }
}
