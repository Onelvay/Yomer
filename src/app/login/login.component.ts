import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      
      const { username, password } = this.loginForm.value;
      console.log(username,password)
      if(username && password){
        this.authService.login(username, password).subscribe((data) => {
          localStorage.setItem('access_token', data.access_token);
        });      
      }
    }
  }
}