import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
  }
  // {
  //   path: 'users', component: UsersComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'users/create', component: UserCreateComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'users/edit/:id', component: UserEditComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
