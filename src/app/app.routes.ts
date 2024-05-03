import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesJuegosComponent } from './pages/detalles-juegos/detalles-juegos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'detalles-juegos/:idJuegos', component: DetallesJuegosComponent },
  
    
    { path: '', redirectTo: 'home' ,  pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
