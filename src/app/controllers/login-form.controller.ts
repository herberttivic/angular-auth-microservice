import { Injectable } from '@angular/core';
import { FormLoginService } from '../services/form-login-service/form-login.service';
import { FormLoginDto, LoginResponseDto } from '../dtos/form-login-dto';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoginFormController {
  constructor(
    private loginService: FormLoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  async login(form: FormLoginDto): Promise<LoginResponseDto> {
    const response = await this.loginService.login(form);
    this.authService.salvaDadosLogin(response);
    this.router.navigate(['/home']);
    return response;
  }

  async logout() {
    this.authService.limpaDados();
    this.router.navigate(['/']);
  }

  async verify(token: string): Promise<void> {
    try {
      this.loginService.verifyToken(token);
    } catch (error) {
      this.logout();
    }
  }
}
