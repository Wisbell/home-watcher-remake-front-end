import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoggedInResponse } from './logged-in-response.interface';
import { GlobalConstants } from '../app.global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private apiUrl = GlobalConstants.apiURL;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.httpClient
      .get<LoggedInResponse>(
        `${this.apiUrl}/auth/loggedIn`
      )
      .pipe(
        catchError( (error) => {
          return of(false);
        }),
        map((response: LoggedInResponse) => {
          if(response.loggedIn)
            return true;
          else {
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
  }

}
