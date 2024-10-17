import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModules } from './material.modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TokenComponent } from './components/token/token.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EstudianteComponent,
    RestauranteComponent,
    LoginComponent,
    TokenComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    BrowserAnimationsModule,
    MaterialModules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
