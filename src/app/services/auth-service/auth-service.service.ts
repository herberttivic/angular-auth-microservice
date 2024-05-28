import { Injectable, inject } from '@angular/core';
import { LoginResponseDto } from '../../dtos/form-login-dto';
import { LoginFormController } from '../../controllers/login-form.controller';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private access_token!: string | null;
  private token_key = 'access_token';
  private loginController = inject(LoginFormController);

  constructor() {}

  salvaDadosLogin(data: LoginResponseDto) {
    this.access_token = data.access_token;
    this.salvaDadosLocalStorage(data);
  }

  private salvaDadosLocalStorage(data: LoginResponseDto) {
    localStorage.setItem(this.token_key, data.access_token);
  }

  private limpaDadosLocalStorage() {
    localStorage.removeItem(this.token_key);
  }

  resgataDadosLocalStorage() {
    const tokenRecuperado = localStorage.getItem(this.token_key);
    if (tokenRecuperado) {
      this.loginController.verify(tokenRecuperado);
    } else {
      this.loginController.logout();
    }
  }

  limpaDados() {
    this.access_token = null;
    this.limpaDadosLocalStorage();
  }
}
