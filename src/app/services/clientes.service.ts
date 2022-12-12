import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../interfaces/Cliente";
import { Response } from "./../interfaces/Response";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  private baseApiUrl = environment.baseApiUrl;
  private apiURL = `${this.baseApiUrl}/clientes`;

  constructor(private http: HttpClient) {}

  // Headers
  private headers = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };

  getClientes() {
    return this.http.get(this.apiURL, this.headers);
  }

  getCliente(id: number): Observable<Response<Cliente>> {
    return this.http.get<Response<Cliente>>(`${this.apiURL}/${id}`);
  }

  criaCliente(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiURL, formData);
  }

  removeCliente(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
