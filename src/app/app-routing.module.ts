import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'productos', component: ListaProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
