import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Endereco } from '../../model/endereco';
import { PessoaService } from '../../service/pessoa-service.service';

@Component({
  selector: 'app-crud-pessoa-form',
  templateUrl: './crud-pessoa-form.component.html',
  styleUrls: ['./crud-pessoa-form.component.css']
})
export class CrudPessoaFormComponent implements OnInit {

  pessoa : Pessoa
  endereco : Endereco
  constructor(private service : PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.endereco = new Endereco();
  }

  inserir () {
    this.pessoa.endereco = this.endereco
    this.service.inserir(this.pessoa);

  }

}
