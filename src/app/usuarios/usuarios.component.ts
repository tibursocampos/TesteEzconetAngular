import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  public title = 'Usuários';
  public usuarioSelecionado :Usuario;
  public usuarioForm: FormGroup;
  public usuarios: Usuario[];  
  
  constructor(private route: Router,
              private fb: FormBuilder,
              private usuarioService: UsuarioService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarUsuarios();
  }
  
  carregarUsuarios() {
    this.usuarioService.getAll().subscribe(
      (usuarios :Usuario[]) => {
        this.usuarios = usuarios;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  criarForm(){
    this.usuarioForm = this.fb.group({
      usuadioId:['',Validators.required],
      nome:['',[Validators.required,Validators.minLength(3), Validators.maxLength(200)]],
      dataNascimento:['',Validators.required],
      email:['',Validators.required], 
      sexoId:['',Validators.required],  
      ativo:['',Validators.required]      
    })
  }
  
  public editar(usuarioId: number){
    this.route.navigate(["editar-usuario", usuarioId]); 
  } 
  
  public excluir(usuarioId: number) {  
    if (confirm("Deseja realmente deletar este usuario ?")) {   
      this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {            
        alert('Usuário deletado com sucesso');  
        this.carregarUsuarios();            
      });  
    }  
  }  
}
