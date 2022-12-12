import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from "./pages/clientes/clientes/clientes.component";
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { HomeComponent } from "./pages/home/home.component";
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ClientesComponent,
    path: 'clientes',
  },
  {
    component: FormClienteComponent,
    path: 'clientes/create',
  },
  {
    component: ProdutosComponent,
    path: 'produtos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
