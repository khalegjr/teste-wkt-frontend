import { Component, OnInit } from '@angular/core';
import { Cliente } from "src/app/interfaces/Cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  btnText = 'Cadastrar'

  constructor() { }

  ngOnInit(): void {
  }

  async createHandler(cliente: Cliente) {
    const formData = new FormData()

    formData.append("nome", cliente.nome)
    formData.append("cpf", cliente.cpf)
    formData.append("logradouro", cliente.logradouro)
    formData.append("numero", cliente.numero)
    formData.append("complemento", cliente.complemento)
    formData.append("bairro", cliente.bairro)
    formData.append("cidade", cliente.cidade)
    formData.append("estado", cliente.estado)
    formData.append("cep", cliente.cep)
    formData.append("email", cliente.email)
    formData.append("data_nascimento", cliente.data_nascimento)

    // TODO: enviar para a API
    // TODO: exibir mensagem de sucesso ou erro
    // TODO: redirect
  }

}
