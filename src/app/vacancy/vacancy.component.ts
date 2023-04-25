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
  constructor(private vacancyService:VacancyService){}
  ngOnInit(){
    const token =localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
      this.getVacancies();
  }
  getVacancies(){
    this.vacancies = this.vacancyService.getVacanciesNoBack()
  }
  submit(id:number){
    const username = localStorage.getItem('username');
    if (username){
      const token =localStorage.getItem('token');
      if (token){
        this.vacancyService.addVacancyJSON(id,username)
        console.log(id,username)
      }
    }
  }
}
