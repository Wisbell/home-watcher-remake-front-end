import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IncidentCreateComponent } from './incident-create/incident-create.component';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';
import { IncidentListComponent } from './incident-list/incident-list.component';



@NgModule({
  declarations: [
    IncidentCreateComponent,
    IncidentEditComponent,
    IncidentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class IncidentModule { }
