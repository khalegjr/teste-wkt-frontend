import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientesService } from "src/app/services/clientes.service";
import { environment } from "src/environments/environment";
import { MessagesService } from "./../../../services/messages.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
})
export class ClientesComponent implements OnInit {
  allClientes: any = [];
  clientes: any = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private message: MessagesService
  ) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((items) => {
      this.clientes = items;
      console.log(items);
    });
  }

  async removeHandler(id: number) {
    await this.clientesService.removeCliente(id).subscribe();

    this.message.add("Cliente excluído com sucesso", "/clientes");
  }
}
