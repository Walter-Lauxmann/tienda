// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Component
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './servicios/login.service';
import { UsuariosService } from './servicios/usuarios.service';
import { UsuarioActivoGuard } from './guards/usuario-activo.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PrincipalComponent,
    ListaProductosComponent,
    DetalleProductosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    LoginService,
    UsuariosService,
    UsuarioActivoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
