import { Component, OnInit } from '@angular/core';
import { Cliente } from "src/app/interfaces/Cliente";
import { ClientesService } from './../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  btnText = 'Cadastrar'

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  async createHandler(cliente: Cliente) {
    const formData = new FormData()

    formData.append("nome", cliente.nome)
    formData.append("cpf", cliente.cpf)
    formData.append("logradouro", cliente.logradouro)
    formData.append("numero", cliente.numero)
    formData.append("bairro", cliente.bairro)
    formData.append("cidade", cliente.cidade)
    formData.append("estado", cliente.estado)
    formData.append("cep", cliente.cep)
    formData.append("email", cliente.email)
    formData.append("data_nascimento", cliente.data_nascimento)

    if (cliente.complemento) {
      formData.append("complemento", cliente.complemento)
    }

    // TODO: enviar para a API

    this.clientesService.criaCliente(formData).subscribe()

    // TODO: redirect
  }

}
