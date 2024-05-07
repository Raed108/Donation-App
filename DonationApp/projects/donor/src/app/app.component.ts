import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(protected authService: AuthService) {}
  showNotificationDetails: boolean = false;
  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }
  }

  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }
  protected readonly localStorage = localStorage;
}
