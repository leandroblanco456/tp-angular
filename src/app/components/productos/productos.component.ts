import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstrumentosService } from '../../services/instrumentos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  instrumentos: any[]=[];
  constructor( public _intrumentoService: InstrumentosService, private router: Router) { }

  ngOnInit(): void {
    this.instrumentos = this._intrumentoService.getInstrumentos();
    console.log(this._intrumentoService.getInstrumentos());
  }

  verInstrumento(idx:string){
   console.log('ver instrumento'+idx)
    this.router.navigate(['/instrumento',idx]);
   
  }
}
