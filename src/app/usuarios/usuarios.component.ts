import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

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
  public usuariosAtivos: Usuario[];
  public nomeBusca: string;
  
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
      });
  }
  
  filtrarAtivos(){
    this.usuarioService.getByAtivo().subscribe(
     (usuariosAtivos: Usuario[]) => {
       this.usuarios = usuariosAtivos;     
         },
      (erro: any) => {
        console.error(erro);
      });   
  }
  
  buscarNome(){
    this.usuarioService.getBynome(this.nomeBusca).subscribe(
      (listaNomes: Usuario[]) => {
        this.usuarios = listaNomes;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  exibirTodos(){
    this.carregarUsuarios();
    this.nomeBusca = '';
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
  
  editar(usuarioId: number){
    this.route.navigate(["editar-usuario", usuarioId]); 
  } 
  
  excluir(usuarioId: number) {  
    if (confirm("Deseja realmente deletar este usuario ?")) {   
      this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {            
        alert('Usuário deletado com sucesso');  
        this.carregarUsuarios();            
      });  
    }  
  }   
  
}
