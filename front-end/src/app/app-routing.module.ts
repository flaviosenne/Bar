import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// bar
import { BarFormComponent } from './bar/bar-form/bar-form.component';
import { BarListComponent } from './bar/bar-list/bar-list.component';

//caixa
import { CaixaFormComponent } from './caixa/caixa-form/caixa-form.component';
import { CaixaListComponent } from './caixa/caixa-list/caixa-list.component';

// ingresso
import { IngressoFormComponent } from './ingresso/ingresso-form/ingresso-form.component';
import { IngressoListComponent } from './ingresso/ingresso-list/ingresso-list.component';

//portaria
import { PortariaFormComponent } from './portaria/portaria-form/portaria-form.component';
import { PortariaListComponent } from './portaria/portaria-list/portaria-list.component';

//promotor
import { PromotorFormComponent } from './promotor/promotor-form/promotor-form.component';
import { PromotorListComponent } from './promotor/promotor-list/promotor-list.component';

// produtos
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';


const routes: Routes = [
  {
    path: "bar-form",
    component: BarFormComponent
  },
 {
   path: "bar-list",
   component: BarListComponent
 },
 {
   path: "caixa-form",
   component: CaixaFormComponent
 },
 {
   path: "caixa-list",
   component: CaixaListComponent
 },
 {
   path: "ingresso-form",
   component: IngressoFormComponent
 },
 {
   path: "ingresso-list",
   component: IngressoListComponent
 },
 {
   path: "portaria-form",
   component: PortariaFormComponent
 },
 {
   path: "portaria-list",
   component: PortariaListComponent
 },
 {
  path: "promotor-form",
  component: PromotorFormComponent
},
{
  path: "promotor-list",
  component: PromotorListComponent
},
 {
  path: "produtos-form",
  component: ProdutosFormComponent
},
{
  path: "produtos-list",
  component: ProdutosListComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
