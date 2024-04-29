import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../login/services/auth.service";

class FromGroup {
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent  implements OnInit{
  changePasswordForm : FormGroup

  constructor(private authservice: AuthService) {
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      'oldPassword' : new FormControl(null,Validators.required) ,
      'newPassword' : new FormControl(null,Validators.required)
    })
  }

  submitChange(){
    let newPassword = this.changePasswordForm.get('newPassword').value ;
    console.log(this.isMatching())
    if (this.isMatching())
      this.authservice.resetPassword(this.authservice.username,newPassword)
  }

  isMatching() {
    let username = this.authservice.username;
    let oldPassword = this.changePasswordForm.get('oldPassword').value;

    // Check if the old password matches the one stored in the service
    return this.authservice.isMatchingPasswords(username, oldPassword);
  }

}
