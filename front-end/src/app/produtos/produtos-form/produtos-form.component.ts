import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produtos: any = {
    nome: '',
    RG: null,
    tipo_ingresso: '',
    vaga: false,
    n_vaga: null
  }
  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
  }
  async cadastrar() {
    await this.produtoService.novo(this.produtos)
  }  

}
