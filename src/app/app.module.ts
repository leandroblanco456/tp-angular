import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//rutas
import { APP_ROUTING } from './app.routes';

import { InstrumentosService } from './services/instrumentos.service';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    InstrumentoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    InstrumentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
