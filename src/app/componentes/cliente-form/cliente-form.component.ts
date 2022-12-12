import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Cliente } from "../../interfaces/Cliente";

enum Estados {
  'AC' = 'Acre',
  'AL' = 'Alagoas',
  'AP' = 'Amapá',
  'AM' = 'Amazonas',
  'BA' = 'Bahia',
  'CE' = 'Ceará',
  'DF' = 'Distrito Federal',
  'ES' = 'Espírito Santo',
  'GO' = 'Goiás',
  'MA' = 'Maranhão',
  'MT' = 'Mato Grosso',
  'MS' = 'Mato Grosso do Sul',
  'MG' = 'Minas Gerais',
  'PA' = 'Pará',
  'PB' = 'Paraíba',
  'PR' = 'Paraná',
  'PE' = 'Pernambuco',
  'PI' = 'Piauí',
  'RJ' = 'Rio de Janeiro',
  'RN' = 'Rio Grande do Norte',
  'RS' = 'Rio Grande do Sul',
  'RO' = 'Rondônia',
  'RR' = 'Roraima',
  'SC' = 'Santa Catarina',
  'SP' = 'São Paulo',
  'SE' = 'Sergipe',
  'TO' = 'Tocantins'
}

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Cliente>()
  @Input() btnText!: string
  lista_estados = Estados

  clienteForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.clienteForm = new FormGroup(
      {
        id: new FormControl(''),
        nome: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(11), Validators.pattern('[0-9]{11}')])),
        logradouro: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
        cep: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(11), Validators.pattern('[0-9]{5}-[0-9]{3}')])),
        email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
        data_nascimento: new FormControl('', Validators.required),
      }
    )
  }

  get nome() {
    return this.clienteForm.get('nome')!
  }

  get cpf() {
    return this.clienteForm.get('cpf')!
  }

  get logradouro() {
    return this.clienteForm.get('logradouro')!
  }

  get numero() {
    return this.clienteForm.get('numero')!
  }

  get bairro() {
    return this.clienteForm.get('bairro')!
  }

   get complemento() {
    return this.clienteForm.get('complemento')!
  }

  get cidade() {
    return this.clienteForm.get('cidade')!
  }

  get estado() {
    return this.clienteForm.get('estado')!
  }

   get cep() {
    return this.clienteForm.get('cep')!
  }

  get email() {
    return this.clienteForm.get('email')!
  }

  get data_nascimento() {
    return this.clienteForm.get('data_nascimento')!
  }

  submit(): void {
    if (this.clienteForm.invalid) {
      return
    }

    this.onSubmit.emit(this.clienteForm.value)
  }

}
