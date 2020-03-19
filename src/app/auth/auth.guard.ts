import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoggedInResponse } from './logged-in-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.http
      .get<LoggedInResponse>(
        `${this.apiUrl}/auth/loggedIn`
      )
      .pipe(
        catchError( (error) => {
          // TODO: Add toast of error - invalid username/pass?
          return of(false);
        }),
        map((resData: LoggedInResponse) => {
          console.log('resData', resData);

          if(resData.loggedIn)
            return true;
          else
            return false;
        })
      );
  }

}
