import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},

  {
    path: '',
    loadChildren: () =>
      import('./views/store-management/store-management.module').then(
        (m) => m.StoreManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
