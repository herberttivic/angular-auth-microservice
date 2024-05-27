import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/login-page/login-page.component').then(
        (r) => r.LoginPageComponent
      ),
  },
];
