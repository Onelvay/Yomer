import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}


  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

  }

  login() {
    this.authService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout() {
    localStorage.removeItem('token');
    // Request to the Django
    this.logged = false;
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
}