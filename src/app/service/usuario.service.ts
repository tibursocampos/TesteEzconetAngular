import { Usuario } from './../Models/Usuario';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
        
    baseUrl = `${environment.mainURL}/api/TesteEzconet/usuarios`;
    urlBuscaAtivos = `${environment.mainURL}/api/TesteEzconet/usuarios/ativo`;
    urlBuscaNome = `${environment.mainURL}/api/TesteEzconet/usuarios/busca?nome`;
    
    constructor(private http: HttpClient) {}  
    
    
    getAll() :Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.baseUrl}`);        
    }
    
    getById(id :number) :Observable<Usuario>{
        return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
    }
    
    getBynome(nome: string) :Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.urlBuscaNome}=${nome}`);
    }
    
    getByAtivo() :Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.urlBuscaAtivos}`);
    }
    
    createUsuario(usuario: Usuario) :Observable<Usuario>{
       return this.http.post<Usuario>(this.baseUrl, usuario);
    }
    
    editUsuario(id: number, usuario: Usuario) :Observable<Usuario>{
        return this.http.put<Usuario>(`${this.baseUrl}/${id}`, usuario);
    }
    
    deleteUsuario(id: number) :Observable<Usuario>{
        return this.http.delete<Usuario>(`${this.baseUrl}/${id}`);
    }
    
    
}