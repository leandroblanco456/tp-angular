import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from '../../services/instrumentos.service';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  instrumento:any;

  constructor( private activatedRoute: ActivatedRoute, private _instrumentosService: InstrumentosService ) { 
    this.activatedRoute.params.subscribe( params => {
      this.instrumento = this._instrumentosService.getInstrumentosXId( params['id'])
      console.log(this.instrumento)
    } )
   }

  ngOnInit(): void {
  }

}
