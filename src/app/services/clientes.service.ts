import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseApiUrl = environment.baseApiUrl
  private apiURL = `${this.baseApiUrl}/clientes`

  constructor(private http: HttpClient) { }

  criaCliente(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiURL, formData);
  }
}
