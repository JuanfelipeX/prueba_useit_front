import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDetallesComponent } from './components/lista-detalles/lista-detalles.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'lista-detalles/:id', component: ListaDetallesComponent },
  { path: '', redirectTo: 'lista-usuarios', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
