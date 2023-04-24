import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Company, Vacancy } from './models';
@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient) { }
  getVacancies(): Observable<Vacancy[]> 
  {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/categories/`
    )
  }
  getVacanciesNoBack() {
    const arr:Vacancy[]=[{id:1,companyId:2,companyName:'Google',direction:'Go backend',description:"Бекенд - это серверная часть веб-приложения, которая отвечает за обработку запросов от клиентской части и взаимодействие с базой данных или другими внешними сервисами."},
    {id:2,companyId:3,companyName:'Kolesa Group',direction:'Php backend',description:"Бекенд - это серверная часть веб-приложения, которая отвечает за обработку запросов от клиентской части и взаимодействие с базой данных или другими внешними сервисами."},
    {id:3,companyId:4,companyName:'Kaspi',direction:'Angular frontend',description:"Фронтенд - разработка пользовательского интерфейса и его взаимодействия с бекендом в веб-приложении."},
    {id:4,companyId:5,companyName:'Jusan',direction:'Django+Angular FullStack',description:"Фуллстек - специалист, который может разрабатывать как фронтенд, так и бекенд части приложения."},
    {id:5,companyId:3,companyName:'Kolesa Group',direction:'DevOps',description:"Девопс - профессионал, отвечающий за развертывание, автоматизацию и управление инфраструктурой и приложениями в веб-среде."},
    {id:6,companyId:6,companyName:'Halyk Market',direction:'Go backend',description:"Бекенд - это серверная часть веб-приложения, которая отвечает за обработку запросов от клиентской части и взаимодействие с базой данных или другими внешними сервисами."},
  ]
    return arr
  }
  getCompaniesTest(){
    const arr:Company[]=[{id:2,name:'Google'},
  {id:3,name:'Kolesa Group'},
  {id:4,name:'Kaspi'},
  {id:5,name:'Jusan'},
  {id:6,name:'Halyk Market'},
  ]
  return arr
  }
  submitVacancy(id:number,username:string){
    return this.client.post<Vacancy>(`${this.BASE_URL}/api/vacancies`,{vacancy_id:id,username:username})
  }
}
