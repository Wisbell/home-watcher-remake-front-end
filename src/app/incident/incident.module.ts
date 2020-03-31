import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentCreateComponent } from './incident-create/incident-create.component';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';
import { IncidentListComponent } from './incident-list/incident-list.component';



@NgModule({
  declarations: [IncidentCreateComponent, IncidentEditComponent, IncidentListComponent],
  imports: [
    CommonModule
  ]
})
export class IncidentModule { }
