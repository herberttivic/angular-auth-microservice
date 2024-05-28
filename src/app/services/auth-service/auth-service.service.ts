import { Inject, Injectable, forwardRef, inject } from '@angular/core';
import { LoginResponseDto } from '../../dtos/form-login-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private access_token!: string | null;
  private token_key = 'access_token';

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

  resgataDadosLocalStorage(
    verify: (token: string) => Promise<void>,
    logout: () => Promise<void>
  ) {
    const tokenRecuperado = localStorage.getItem(this.token_key);
    if (tokenRecuperado) {
      verify(tokenRecuperado);
    } else {
      logout();
    }
  }

  limpaDados() {
    this.access_token = null;
    this.limpaDadosLocalStorage();
  }
}
