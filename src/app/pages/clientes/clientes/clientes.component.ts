import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientesService } from 'src/app/services/clientes.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  allClientes: any = []
  clientes: any = []
  baseApiUrl = environment.baseApiUrl

  constructor(private clientesService: ClientesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((items) => {

      this.clientes = items
    })
  }

}
