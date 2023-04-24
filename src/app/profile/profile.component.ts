import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  logged: boolean = false;
  username:string='';
  ngOnInit() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) {
      this.logged = true;
    }
    if (username){
      this.username=username
    }

  }
}
