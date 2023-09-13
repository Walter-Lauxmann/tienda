import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'articulos', component: ListaProductosComponent },
  { path: 'articulos/detalle-producto/:id', component: DetalleProductosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
