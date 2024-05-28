export class FormLoginDto {
  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }
  email: string;
  senha: string;
}

export class LoginResponseDto {
  access_token!: string;

  constructor() {}
}
