import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ProfileComponent } from './profile/profile.component';
import { WhoCreatedComponent } from './who-created/who-created.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    VacancyComponent,
    ProfileComponent,
    WhoCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
