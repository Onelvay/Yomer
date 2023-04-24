import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  vacancies:Vacancy[]=[];
  logged: boolean = false;
  constructor(private vacancyService:VacancyService,private authService: AuthService){}
  ngOnInit(){
      this.getVacancies();
  }
  getVacancies(){
    this.vacancies = this.vacancyService.getVacanciesNoBack()
  }
  submit(id:number){
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password){
      this.authService.login(username, password).subscribe((data) => {
        const token = localStorage.getItem('token');
        if(token){
          if (data.token==token){
            this.vacancyService.submitVacancy(id,username)
          }
        }
      });
    }
    console.log(id)
  }
}
