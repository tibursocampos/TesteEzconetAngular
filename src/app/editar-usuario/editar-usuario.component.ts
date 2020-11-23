import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  
  public title = "Editar Usuário";
  public usuarioEditForm :FormGroup;
  public usuarioSelecionado :Usuario;

  constructor(private fb: FormBuilder) {
    this.editarForm();
  }

  ngOnInit(): void {
  }
  
  editarForm(){
    this.usuarioEditForm = this.fb.group({
      nome:['',Validators.required],
      dataNascimento:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      ativo:['',Validators.required],
      sexo:['',Validators.required]
    });
  }
  
  usuarioSubmit(){
    console.log(this.usuarioEditForm.value);
  }
  
  usuarioSelect(usuario: Usuario){
    this.usuarioSelecionado = usuario;
    this.usuarioEditForm.patchValue(usuario);
  }
  
  voltar(){

  }


}
