import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public brandText = 'Home Watcher';
  public loggedIn: boolean;
  loggedInSubscription: Subscription

  constructor(
    private authService: AuthService
  ) {
    // NOTE: This is to the navbar updates login variable when first logging in
    this.loggedInSubscription = authService.loggedInObservable$.subscribe(
      loggedIn => {
        this.loggedIn = loggedIn;
    });
  }

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.authService.checkIfLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
