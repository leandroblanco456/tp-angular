import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';

@Injectable()
export class InstrumentosService {
    private instrumentosFile:any = (data as any).default;
    constructor(  ){
        console.log(this.instrumentosFile)
       
            }
    

    getInstrumentos():any{
        return this.instrumentosFile.instrumentos;
    }

    getInstrumentosXId(idx:string):any{
        for(let instrumento of this.instrumentosFile.instrumentos){
            if(instrumento.id == idx){
                console.log(instrumento+"hola");
                return instrumento;
            }
        }
    }
}