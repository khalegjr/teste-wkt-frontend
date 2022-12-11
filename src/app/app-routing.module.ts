import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
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
    component: ProdutosComponent,
    path: 'produtos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
