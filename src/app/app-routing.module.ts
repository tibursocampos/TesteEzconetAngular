import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'criar-usuario', component: CriarUsuarioComponent},
  {path: 'editar-usuario/:usuarioId', component: EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
