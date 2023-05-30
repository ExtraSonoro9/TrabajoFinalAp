import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { LogoAPComponent } from './components/logo-ap/logo-ap.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducationComponent } from './components/education/education.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducationComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
