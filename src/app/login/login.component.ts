import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private usuarioService: UsuariosService
    ) {}

    ngOnInit() {

    }

  login(usuario:string, password:string, event: Event) {
    event.preventDefault();
    this.loginService.login(usuario, password)
    .subscribe(
      res => {
        console.log(res);
        let u: Usuario = {usuario: usuario};
        this.usuarioService.setUsuarioLogueado(u);
      },
      error => {
        console.error(error);
      },
      () => this.navegar()
    );
  }

  navegar() {
    this.router.navigateByUrl('/');
  }
}


