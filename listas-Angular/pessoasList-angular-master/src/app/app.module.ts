import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoalistComponent } from './pessoas/pessoalist/pessoalist.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoalistComponent,
    FooterComponent,
    PessoasdetailsComponent,
    HeaderComponent,
    LoginComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
