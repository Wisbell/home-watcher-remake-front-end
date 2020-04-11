import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user/user.model';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { LoginResponse } from './login-response.interface';
import { LoggedInResponse } from './logged-in-response.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  // NOTE: This subject/observable is created so navbar is updated upon initial login
  private loggedInSubject = new Subject<boolean>();
  loggedInObservable$ = this.loggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  emitLoggedIn(personLoggedIn: boolean) {
    this.loggedInSubject.next(personLoggedIn);
  }

  login(username: string, password: string): Promise<void> {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/auth/login`,
        {
          username: username,
          password: password
        }
      ).toPromise()
      .then( (response: LoginResponse) => {
        this.handleAuthentication(response);
        this.emitLoggedIn(true);
        this.router.navigate(['/']);
      })
      .catch( (error) => {
        if (error.status === 401)
          this.toastr.warning('Invalid username and/or password', 'Error');
        else
          this.toastr.warning('Trouble logging in', 'Error');
      });
  }

  register(authCredentialsDto: AuthCredentialsDto): Promise<boolean> {
    return this.http
      .post<User>(
        `${this.apiUrl}/auth/register`,
        authCredentialsDto
      ).toPromise()
      .then( (data) => {
        console.log('data', data);
        return true;
      })
      .catch( (error: HttpErrorResponse) => {
        if (error.status === 400)
          this.toastr.warning('Password must be 8 characters long or username is taken', 'Error');
        else
          this.toastr.warning('Trouble Registering', 'Error');

        return null;
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('userData');
    window.location.href = window.location.href;
  }

  // TODO: auto log out after token expiration?
  private handleAuthentication( loginResponse: LoginResponse ): void {
    localStorage.setItem('accessToken', loginResponse.accessToken);
    localStorage.setItem('userData',
      JSON.stringify(
        this.getUserDataFromToken(loginResponse.accessToken)
      ));
  }

  // TODO: Create error messages for toasts, etc... Remove this if no longer used
  private handleError(errorResponse: HttpErrorResponse): Observable<Error> {
    console.log('called')
    let errorMessage = 'An unknown error occurred!';
    return throwError(errorMessage);
  }

  private getUserDataFromToken(token: string): User {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const user = new User();
    // user.id = decodedToken.id;
    user.username = decodedToken.username;
    user.role = decodedToken.role;
    return user;
  }

  async checkIfLoggedIn(): Promise<boolean> {
    return await this.http
      .get<LoggedInResponse>(
        `${this.apiUrl}/auth/loggedIn`
      ).toPromise()
      .then( (response) => {
        if(response.loggedIn)
          return true;
        else
          return false;
      })
      .catch( error => {
        return false;
      });
  }
}
