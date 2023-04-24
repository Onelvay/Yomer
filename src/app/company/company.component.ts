import { Component } from '@angular/core';
import { Company } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies:Company[]=[];
  logged: boolean = false;
  constructor(private vacancyService:VacancyService){}
  ngOnInit(){
      this.getVacancies();
  }
  getVacancies(){
    this.companies = this.vacancyService.getCompaniesTest()
  }
}
