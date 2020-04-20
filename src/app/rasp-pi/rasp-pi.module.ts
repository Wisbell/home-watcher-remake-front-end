import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaspPiServerStatusComponent } from './rasp-pi-server-status/rasp-pi-server-status.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    RaspPiServerStatusComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    RaspPiServerStatusComponent
  ]
})
export class RaspPiModule { }
