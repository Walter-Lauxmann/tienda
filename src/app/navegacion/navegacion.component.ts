import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  usuarioLogueado: Usuario = {usuario:''};

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(this.usuarioService.getUsuarioLogueado() || '');
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
