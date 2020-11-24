import { UsuarioService } from './../service/usuario.service';
import { DadosService } from './../service/dados.service';
import { Usuario } from './../Models/Usuario';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  [x: string]: any;

  public title = "Editar Usuário";
  public usuarioEditForm :FormGroup = 
  this.fb.group({
    usuarioId:[''],
    nome:['',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    dataNascimento:['',Validators.required],
    email:['',Validators.required],
    senha:['',Validators.required],
    sexoId:['',Validators.required]
  });;
  public usuario :Usuario;
  public userId: number;

  constructor(private fb: FormBuilder,
              private route :ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) {   
  }

  ngOnInit(): void {    
      this.route.params.subscribe((params: Params) => this.userId = params['usuarioId']);
      this.usuarioService.getById(this.userId).subscribe(
        x => this.editarForm(x)
      );
        
  }
  
  editarForm(usuario: Usuario){
    let ativo: number = 1;
    if(usuario.ativo == false){
      ativo = 2;
    }
    this.usuarioEditForm.setValue({
      usuarioId: usuario.usuarioId,
      nome: usuario.nome,
      dataNascimento: usuario.dataNascimento,      
      email: usuario.email,
      senha: usuario.senha,
      sexoId: usuario.sexoId,
      //ativo: ativo
   });
  }
  
  salvar(){   
    const usuario: Usuario = this.usuarioEditForm.value;  
    usuario.sexoId = Number(usuario.sexoId);
    this.usuarioService.editUsuario(usuario.usuarioId, usuario).subscribe(
      () => {
        alert("Usuário alterado com sucesso !!!");
        this.usuarioEditForm.reset();
        this.router.navigate(['usuarios']);
      }
    );
  }
   
  voltar(){
    this.router.navigate(['usuarios']);  
  }


}
