import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getUserProfileFromBackEnd() {
    console.log('clicked!');

    const apiUrl = 'http://localhost:3000/profile';

    console.log('apiUrl', apiUrl);

    const profileObserverable = this.http
      .get(
        `${apiUrl}`
      )
      .pipe(
        catchError( (error) => {
          console.log('error', error);
          return throwError(error);
        }),
        tap((resData: any) => {
          console.log('resData', resData);
        })
      );

    profileObserverable.subscribe();
  }

  decodeJwt() {
    console.log('clicked!');
    const helper = new JwtHelperService();
    const tokenGetter = helper.tokenGetter();
    console.log('tokenGetter', tokenGetter);
    const token = localStorage.getItem("access_token");
    console.log('token', token);
    const decodedToken = helper.decodeToken(token);
    console.log('decodedToken', decodedToken);
    const expirationDate = helper.getTokenExpirationDate(token);
    console.log('expirationDate', expirationDate);
    const isExpired = helper.isTokenExpired(token);
    console.log('isExpired', isExpired);
  }
}
