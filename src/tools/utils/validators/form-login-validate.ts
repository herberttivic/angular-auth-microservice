import { FormGroup } from '@angular/forms';
import { FormLoginDto } from '../../../app/dtos/form-login-dto';

export function validateFormLogin(form: FormGroup): FormLoginDto | null {
  const { email, senha } = form.value;
  if (!email) {
    return null;
  }

  if (!senha || senha.length < 6) {
    return null;
  }

  return { email, senha };
}
