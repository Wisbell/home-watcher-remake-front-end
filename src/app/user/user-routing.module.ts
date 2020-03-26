import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '', component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create', component: UserCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id', component: UserEditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
