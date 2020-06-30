import { Component, OnInit } from '@angular/core';
import { CaixaService } from '../caixa.service';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
  
  @Component({
    selector: 'app-caixa-form',
    templateUrl: './caixa-form.component.html',
    styleUrls: ['./caixa-form.component.css']
  })
  export class CaixaFormComponent implements OnInit {
  
    caixa: any = {
      pedido_fichas: null,
      vlr_recebido: null,
      forma_pag: '',
      troco: 0,
      ingresso_vinc: ''
    }
    constructor(private caixaService: CaixaService) { }
  
    ngOnInit(): void {
    }
  
    async cadastrar() {
      await this.caixaService.novo(this.caixa)
    }  

}
