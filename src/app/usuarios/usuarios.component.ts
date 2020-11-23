import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  public title = 'Usuários';
  public usuarioSelecionado :Usuario;
  
  public usuarios = [
    {id: 1, nome: 'Maria', dataNascimento: '15-05-1980', email: 'maria@testes.com', sexo: 'Feminino', ativo: 'Ativo'},
    {id: 2, nome: 'João', dataNascimento: '25-12-1989', email: 'joao@testes.com', sexo: 'Masculino', ativo: 'Inativo'},
    {id: 3, nome: 'Guilherme', dataNascimento: '09-05-1984', email: 'guilherme@testes.com', sexo: 'Masculino', ativo: 'Ativo'}
  ];
  
  constructor() {
  }

  ngOnInit(): void {
  }
  
  public editar(usuario :Usuario){
    this.usuarioSelecionado = usuario;    
  }
  
  

  

}
