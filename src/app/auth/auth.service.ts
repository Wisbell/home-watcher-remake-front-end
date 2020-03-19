import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginResponse } from './login-response.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../pages/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/auth/login`,
        {
          username: username,
          password: password
        }
      )
      .pipe(
        catchError( error => this.handleError(error) ),
        tap( (response: LoginResponse ) => {
          this.handleAuthentication(response);
        })
      );
  }

  // TODO: auto log out after token expiration?
  private handleAuthentication( loginResponse: LoginResponse ) {
    localStorage.setItem('access_token', loginResponse.access_token);
    localStorage.setItem('userData',
      JSON.stringify(
        this.getUserDataFromToken(loginResponse.access_token)
      ));
  }

  // TODO: Create error messages for toasts, etc...
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(errorMessage);
  }

  private getUserDataFromToken(token: string): User {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const user = new User();
    user.userId = decodedToken.sub;
    user.username = decodedToken.username;
    return user;
  }
}
