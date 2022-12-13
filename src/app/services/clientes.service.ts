import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  private baseApiUrl = environment.baseApiUrl;
  private apiURL = `${this.baseApiUrl}/clientes`;

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get(this.apiURL, { observe: "response" });
  }

  getCliente(id: number) {
    return this.http.get(`${this.apiURL}/${id}`, { observe: "response" });
  }

  criaCliente(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiURL, formData);
  }

  removeCliente(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
