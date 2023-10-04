import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public estaLogueado = false;
  private usuarioLogueado: Usuario = {usuario:''};

  constructor() { }

  setUsuarioLogueado(usuario: Usuario) {
    this.estaLogueado = true;
    this.usuarioLogueado = usuario;
    sessionStorage.setItem('usuarioActual', JSON.stringify(usuario));
  }

  getUsuarioLogueado() {
    return sessionStorage.getItem('usuarioActual');
  }

}
