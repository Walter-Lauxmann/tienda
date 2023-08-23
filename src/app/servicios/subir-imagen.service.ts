import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {

  url = 'http://localhost/api/modelos/subirarchivos.php';

  constructor(private http: HttpClient) { }

  subirImagen(datos: any):Observable<any> {
    return this.http.post(this.url, datos);
  }
}
