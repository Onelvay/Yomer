import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

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
      this.getVacancies();
  }
  getVacancies(){
    this.vacancies = this.vacancyService.getVacanciesNoBack()
  }
}
