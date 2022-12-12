import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../interfaces/Cliente";
import { Response } from './../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseApiUrl = environment.baseApiUrl
  private apiURL = `${this.baseApiUrl}/clientes`

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Response<Cliente[]>> {
    return this.http.get<Response<Cliente[]>>(this.apiURL)
  }

  criaCliente(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiURL, formData);
  }
}
