import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityHomeComponent } from './security-home/security-home.component';
import { SecurityRecentComponent } from './security-recent/security-recent.component';
import { SecurityLiveComponent } from './security-live/security-live.component';


@NgModule({
  declarations: [
    SecurityHomeComponent,
    SecurityRecentComponent,
    SecurityLiveComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class SecurityModule { }
