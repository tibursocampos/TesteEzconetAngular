import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {
  
  public title = 'Adicionar usuário';
  public usuarioForm :FormGroup;

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {
  }
  
  criarForm(){
    this.usuarioForm = this.fb.group({
      nome:['',Validators.required],
      dataNascimento:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      sexo:['',Validators.required]
    });
  }
  
  usuarioSubmit(){
    console.log(this.usuarioForm.value);
  }

}
