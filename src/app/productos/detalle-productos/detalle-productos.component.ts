import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  id: any;
  items: any;
  producto: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private productoService: ProductosService
    ) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.producto = this.productoService.producto;
    if( this.id > 0 ) {
      this.obtenerProducto( this.id );
    } 
  }

  obtenerProducto(id: any): void {
    this.productoService.getProducto(id)
    .subscribe (
      (res: any) => {
        this.items = res;
        this.producto = this.items[0];
        console.log(this.producto);
      },
      error =>{ 
        this.producto = this.productoService.producto;
        console.log(error); 
      }
    );
  }

  guardarProducto(id: any): void {
    this.productoService.guardarProducto(id, this.producto);
    alert ('Producto guardado!');
    this.router.navigateByUrl('/articulos');
  }

  eliminarProducto(id: any): void {
    let respuesta = confirm(`Desea eliminar a ${this.producto.nombre}?`);
    if( respuesta ) {
      this.productoService.eliminarProducto(id);
      alert(`${this.producto.nombre} ha sido eliminado!`);
      this.router.navigateByUrl('/articulos');
    }
  }
} 
