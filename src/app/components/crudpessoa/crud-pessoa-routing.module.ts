import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudPessoaListComponent } from './list/crud-pessoa-list.component';
import { CrudPessoaFormComponent } from './form/crud-pessoa-form.component';

const routes: Routes = [
  {
    path : '' , component : CrudPessoaListComponent
  },
  {
    path : 'create' , component : CrudPessoaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPessoaRoutingModule { }
