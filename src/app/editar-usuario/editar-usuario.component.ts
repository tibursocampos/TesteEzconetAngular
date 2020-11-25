import { UsuarioService } from './../service/usuario.service';
import { DadosService } from './../service/dados.service';
import { Usuario } from './../Models/Usuario';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
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
    sexoId:['',Validators.required],
    ativo:['']
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
    let formAtivo = usuario.ativo;
    let ativo: string;
    formAtivo ? ativo = '1' : ativo = '2';
    //let data = usuario.dataNascimento;
    //let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    //dataFormatada = ;
    this.usuarioEditForm.setValue({
      usuarioId: usuario.usuarioId,
      nome: usuario.nome,
      dataNascimento: usuario.dataNascimento,     
      email: usuario.email,
      senha: usuario.senha,
      sexoId: usuario.sexoId,
      ativo: ativo
   });
  }
    
  salvar(){   
    const usuario: Usuario = this.usuarioEditForm.value; 
    usuario.sexoId = Number(usuario.sexoId);
    let ativo = String(usuario.ativo);
    ativo == '1' ? usuario.ativo = true : usuario.ativo = false;
    this.usuarioService.editUsuario(usuario.usuarioId, usuario).subscribe(
      () => {
        alert("Usuário alterado com sucesso !!!");
        this.usuarioEditForm.reset();
        this.router.navigate(['usuarios']);
      }
    );
  }
  
  excluir(usuarioId: number){
    if (confirm("Deseja realmente deletar este usuario ?")) {   
      this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {            
        alert('Usuário deletado com sucesso');
        this.router.navigate(['usuarios']);               
      });  
    }  
  }
   
  voltar(){
    this.router.navigate(['usuarios']);  
  }
}
