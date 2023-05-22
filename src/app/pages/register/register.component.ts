import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  };
  onSubmit() {
    console.log("thông tin đăng ký:", this.user);
  }
}
