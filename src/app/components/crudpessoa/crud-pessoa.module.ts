import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPessoaRoutingModule } from './crud-pessoa-routing.module';
import { CrudPessoaFormComponent } from './form/crud-pessoa-form.component';
import { CrudPessoaListComponent } from './list/crud-pessoa-list.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CrudPessoaRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CrudPessoaFormComponent, CrudPessoaListComponent]
})
export class CrudPessoaModule { }
