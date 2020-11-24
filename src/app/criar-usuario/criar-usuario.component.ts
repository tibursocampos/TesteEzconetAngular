import { UsuariosComponent } from './../usuarios/usuarios.component';
import { UsuarioService } from './../service/usuario.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../Models/Usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {
  
  public title = 'Adicionar usuário';
  public usuarioForm :FormGroup;
  public usuario: Usuario;
  public dataSaved = false;
  public allUsuarios: Observable<Usuario[]>;
  public usuarioIdUpdate = null;
  public message = null;

  constructor(private fb: FormBuilder,
              private route: Router,
              private usuarioService: UsuarioService,
              private listaUsuarios: UsuariosComponent) {
    this.criarForm();
  }

  ngOnInit(): void {
  }
  
  criarForm(){
    this.usuarioForm = this.fb.group({
      nome:['',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      dataNascimento:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],      
      sexoId:['',Validators.required],
      //ativo:['',Validators.required]
    });
  }
  
  usuarioSubmit(){
    const usuario: Usuario = this.usuarioForm.value;  
    usuario.sexoId = Number(usuario.sexoId);
    this.usuarioService.createUsuario(usuario).subscribe(
      () => {
        console.log(usuario);
        alert("Usuário criado com sucesso !!!");
        this.usuarioForm.reset();
      }
    );
  }  
  
  voltarUsuario(){
    this.route.navigate(['usuarios']);
  }
  
  limparForm(){    
    this.usuarioForm.reset();    
  }

}
