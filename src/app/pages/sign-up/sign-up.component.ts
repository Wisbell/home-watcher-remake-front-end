import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    const userCreated: Boolean = await this.authService.register({ username, password });

    if (userCreated) {
      await this.authService.login(username, password);
      this.router.navigate(['/users']);
    }
  }
}
