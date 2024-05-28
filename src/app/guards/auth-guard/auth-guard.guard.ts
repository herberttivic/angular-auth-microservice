import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return true;
};
