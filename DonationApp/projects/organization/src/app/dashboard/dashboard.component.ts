import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Organization} from "../auth/Organization.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  organization :Organization
  isAnimating: boolean = false;
  constructor(private authService :AuthService) {
  }
  ngOnInit() {
    this.organization = this.authService.currentOrganization
  }
  startAnimation() {
    this.isAnimating = true;
    if (this.isAnimating) {
      // Reset animation when it ends
      setTimeout(() => this.isAnimating = false, 1300);
    }
  }
}
