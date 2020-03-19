import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<any>;

    authObs = this.authService.login(username, password);

    // TODO: Add toast on error?
    authObs.subscribe(
      resData => {
        this.router.navigate(['/users']);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );

    form.reset();
  }

}
