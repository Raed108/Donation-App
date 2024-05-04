import { Component } from '@angular/core';
import {AuthService} from "./login/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected authService: AuthService) {
  }
}
