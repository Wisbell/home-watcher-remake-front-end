import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaspPiServerStatusComponent } from './rasp-pi-server-status/rasp-pi-server-status.component';



@NgModule({
  declarations: [
    RaspPiServerStatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RaspPiServerStatusComponent
  ]
})
export class RaspPiModule { }
