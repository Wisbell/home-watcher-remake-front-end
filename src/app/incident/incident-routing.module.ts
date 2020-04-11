import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentCreateComponent } from './incident-create/incident-create.component';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';

const routes: Routes = [
  {
    path: '', component: IncidentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create/:id', component: IncidentCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id', component: IncidentEditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }
