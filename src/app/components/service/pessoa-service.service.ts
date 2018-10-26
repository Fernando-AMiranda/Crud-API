import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

const URL_API = "http://10.11.21.162:8080/pessoa/";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  constructor(private http : HttpClient) { } 

  public buscarTodas() : Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL_API);
  }
  public buscarCpf(cpf : string) : Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL_API + cpf);
  }

  public inserir(pessoa : Pessoa){
    return this.http.post<Pessoa>(URL_API, pessoa)
  }
}
