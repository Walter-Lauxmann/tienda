import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  login(usuario:string, password:string) {
    this.loginService.login(usuario, password)
    .subscribe(
      res => {
        console.log(res);
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


