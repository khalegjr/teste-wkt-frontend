import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/interfaces/Cliente";
import { ClientesService } from "src/app/services/clientes.service";
import { MessagesService } from "src/app/services/messages.service";

@Component({
  selector: "app-form-cliente",
  templateUrl: "./form-cliente.component.html",
  styleUrls: ["./form-cliente.component.scss"],
})
export class FormClienteComponent implements OnInit {
  btnText = "Cadastrar";
  tituloForm = "Cadastrar Cliente";

  constructor(
    private clientesService: ClientesService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(cliente: Cliente) {
    const formData = new FormData();

    formData.append("nome", cliente.nome);
    formData.append("cpf", cliente.cpf);
    formData.append("logradouro", cliente.logradouro);
    formData.append("numero", cliente.numero);
    formData.append("bairro", cliente.bairro);
    formData.append("cidade", cliente.cidade);
    formData.append("estado", cliente.estado);
    formData.append("cep", cliente.cep);
    formData.append("email", cliente.email);
    formData.append("data_nascimento", cliente.data_nascimento);

    if (cliente.complemento) {
      formData.append("complemento", cliente.complemento);
    }

    this.clientesService.criaCliente(formData).subscribe();

    this.messageService.add("Cliente adicionado com sucesso", "clientes");
  }
}
