import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// observable: responssável por requisições HTTP
import { HttpClientModule} from '@angular/common/http'

// Modulos de Terceiros
 import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import {MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { MatTabsModule} from '@angular/material/tabs'

// Componentes gerado para navegação 
import { BarFormComponent } from './bar/bar-form/bar-form.component';
import { BarListComponent } from './bar/bar-list/bar-list.component';
import { CaixaListComponent } from './caixa/caixa-list/caixa-list.component';
import { CaixaFormComponent } from './caixa/caixa-form/caixa-form.component';
import { IngressoFormComponent } from './ingresso/ingresso-form/ingresso-form.component';
import { IngressoListComponent } from './ingresso/ingresso-list/ingresso-list.component';
import { PortariaListComponent } from './portaria/portaria-list/portaria-list.component';
import { PortariaFormComponent } from './portaria/portaria-form/portaria-form.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { PromotorListComponent } from './promotor/promotor-list/promotor-list.component';
import { PromotorFormComponent } from './promotor/promotor-form/promotor-form.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    BarFormComponent,
    BarListComponent,
    CaixaListComponent,
    CaixaFormComponent,
    IngressoFormComponent,
    IngressoListComponent,
    PortariaListComponent,
    PortariaFormComponent,
    ProdutosFormComponent,
    ProdutosListComponent,
    PromotorListComponent,
    PromotorFormComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConfirmComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
