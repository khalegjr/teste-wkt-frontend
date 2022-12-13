import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = ''

  constructor(private router: Router) { }

  add(message: string, rota: string): void {
    this.router.navigate([rota])
    this.message = message

    setTimeout((): void => {
      this.clear()
    }, 4000)
  }

  clear(): void {
    this.message = ''
  }
}
