import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessagesService } from "src/app/services/messages.service";
import { ClientesService } from "./../../../services/clientes.service";

@Component({
  selector: "app-detalhes-cliente",
  templateUrl: "./detalhes-cliente.component.html",
  styleUrls: ["./detalhes-cliente.component.scss"],
})
export class DetalhesClienteComponent implements OnInit {
  cliente?: any;
  btnText: string = "Editar";

  constructor(
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private message: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.clienteService.getCliente(id).subscribe((item) => {
      this.cliente = item.body;

      /* TODO: juntar todos os tratamentos de dados de response em uma classe.
      talvez em um Interceptor */
      this.cliente.data_nascimento = new Date(
        this.cliente.data_nascimento
      ).toLocaleDateString("pt-BR");

      this.cliente.created_at = new Date(
        this.cliente.created_at
      ).toLocaleDateString("pt-BR");

      this.cliente.updated_at = new Date(
        this.cliente.updated_at
      ).toLocaleDateString("pt-BR");

      console.log("Opa " + item.status);

      // if (item.status == 404) {
      //   this.message.add("Cliente inexistente", "clientes");
      // }
    });
  }
}
