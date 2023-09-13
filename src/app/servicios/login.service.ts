import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost/api/modelos/login.php';

  constructor(private http: HttpClient) { }

  login(usuario:string, password:string) {
    return this.http.post(this.url, {
      usuario,
      password
    })
  }
}
