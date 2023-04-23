import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { WhoCreatedComponent } from './who-created/who-created.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'',component:MainPageComponent,children:[
    {path:'',redirectTo:'/',pathMatch:'full'},
    {path:'',component:WhoCreatedComponent},
    { path:'profile',component:ProfileComponent,},
    { path:'vacancy',component:VacancyComponent},
    { path:'login',component:LoginComponent},
    { path:'sign-up',component:SignUpComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
