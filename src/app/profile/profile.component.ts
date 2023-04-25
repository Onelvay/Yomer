import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { AuthService } from '../auth.service';
import { VacancyService } from '../vacancy.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  logged: boolean = false;
  username:string='';
  vacancies:Vacancy[]=[];
  jsonDataResult:any;
  constructor(private vacancyService: VacancyService,private http:HttpClient) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) {
      this.logged = true;
    }
    if (username){
      this.username=username
      this.vacancies=this.vacancyService.getUserVacanciesTest(username)
     console.log(this.vacancies)
    }
    
  }
}
