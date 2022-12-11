import { Component, OnInit } from '@angular/core';

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

  createHandler(event:any): void {
    console.warn('FOIII')
  }

}
