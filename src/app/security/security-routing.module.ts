import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityHomeComponent } from './security-home/security-home.component';
import { AuthGuard } from '../auth/auth.guard';
import { SecurityRecentComponent } from './security-recent/security-recent.component';
import { SecurityLiveComponent } from './security-live/security-live.component';

const routes: Routes = [
  {
    path: '', component: SecurityHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recent', component: SecurityRecentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'live', component: SecurityLiveComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
