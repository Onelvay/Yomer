import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Application, Company, Vacancy ,Company1} from './models';
@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'
  jsonDataResult:any;
  userVacancies:Vacancy[]=[];
  companies:Company[]=[{id:2,name:'Google'},
  {id:3,name:'Kolesa Group'},
  {id:4,name:'Kaspi'},
  {id:5,name:'Jusan'},
  {id:6,name:'Halyk Market'},
  ]
  constructor(private client: HttpClient) { }
  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`
    )
  }
  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }
  getCompaniesTest(){
  return this.companies
  }
  addVacancy(id:number,username:string){
    return this.client.post<Vacancy>(`${this.BASE_URL}/api/vacancy`,{vacancy_id:id,username:username})
  }
  addVacancyJSON(id:number,username:string){
    this.client.post<Application>('assets/data.json',{username,id})
  }
  getUserVacancies(username:string): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies?username=${{username}}`)
  }
  getUserVacanciesTest(username:string) {
    let userVacancies:Vacancy[]=[]
    return userVacancies
  }
}
