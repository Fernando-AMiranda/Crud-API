import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa-service.service';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-crud-pessoa-list',
  templateUrl: './crud-pessoa-list.component.html',
  styleUrls: ['./crud-pessoa-list.component.css']
})
export class CrudPessoaListComponent implements OnInit {

  constructor(private service : PessoaService) { }

    pessoas : Array<Pessoa>
  ngOnInit() {

    this.pessoas = new Array();
    this.buscarTodas();
  }

  public buscarTodas(): void{

    this.service.buscarTodas().subscribe(req => this.pessoas = req);
  }

}
