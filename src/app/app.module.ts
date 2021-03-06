import { UsuarioService } from './service/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CriarUsuarioComponent,
    DashboardComponent,
    NavComponent,
    TitleComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,UsuarioService,UsuariosComponent,EditarUsuarioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
