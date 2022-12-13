import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./pages/clientes/clientes/clientes.component";
import { DetalhesClienteComponent } from "./pages/clientes/detalhes-cliente/detalhes-cliente.component";
import { FormClienteComponent } from "./pages/clientes/form-cliente/form-cliente.component";
import { ProdutosComponent } from "./pages/produtos/produtos.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    // title: "Página Inicial",
    // component: HomeComponent,
    redirectTo: "clientes",
  },
  {
    path: "clientes",
    pathMatch: "prefix",
    children: [
      {
        path: "",
        component: ClientesComponent,
      },
      {
        path: "create",
        component: FormClienteComponent,
      },
      {
        path: ":id",
        component: DetalhesClienteComponent,
      },
    ],
  },

  {
    path: "produtos",
    pathMatch: "prefix",
    children: [
      {
        path: "",
        component: ProdutosComponent,
      },
      {
        path: "create",
        component: FormClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
