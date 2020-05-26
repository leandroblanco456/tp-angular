
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'instrumento/:id', component: InstrumentoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);