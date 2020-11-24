import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario';

@Injectable({
    providedIn: 'root'
})
export class DadosService {
    
    private usuario: Usuario;
    
    constructor() {}  
    
    setUsuario(usuario :Usuario){
        this.usuario = usuario;
    }
    
    getUsuario(){
        return this.usuario;
    }
    
}