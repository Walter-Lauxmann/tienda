import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable()
export class UsuarioActivoGuard implements CanActivate {
  constructor(private usuarioService: UsuariosService, private router: Router) {}

  canActivate() {
    if(!this.usuarioService.estaLogueado) {
      console.log('No está logueado');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
