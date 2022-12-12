import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { DetalhesClienteComponent } from './pages/clientes/detalhes-cliente/detalhes-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientesComponent,
    ProdutosComponent,
    ClienteFormComponent,
    MessagesComponent,
    FormClienteComponent,
    DetalhesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
