import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { 
    path: 'tipo-produto', 
    loadChildren: '../app/components/tipoproduto/tipo-produto.module#TipoProdutoModule'
  }, 
  { 
    path: 'crud', 
    loadChildren: '../app/components/crudpessoa/crud-pessoa.module#CrudPessoaModule'
  }, 
  {
    path: 'input', 
    loadChildren: '../app/components/input/input-decorator.module#InputDecoratorModule'
  }, 
  {
    path: 'reactive', 
    loadChildren: '../app/components/reactiveforms/reactive-forms.module#ReactiveFormsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ], 
  declarations: []
})
export class AppRoutingModule { }
