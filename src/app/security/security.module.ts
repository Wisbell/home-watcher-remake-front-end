import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityHomeComponent } from './security-home/security-home.component';
import { SecurityRecentComponent } from './security-recent/security-recent.component';
import { SecurityLiveComponent } from './security-live/security-live.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


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
