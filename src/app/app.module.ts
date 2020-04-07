import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JwtModule } from "@auth0/angular-jwt";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserModule } from './user/user.module';
import { SecurityModule } from './security/security.module';
import { IncidentModule } from './incident/incident.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { RaspPiModule } from './rasp-pi/rasp-pi.module';
import { SettingsComponent } from './pages/settings/settings.component';


const apiurl = 'localhost:3000';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("accessToken");
        },
        whitelistedDomains: ["example.com", apiurl],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    UserModule,
    SecurityModule,
    IncidentModule,
    RaspPiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
