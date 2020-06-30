import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos: any = []
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.listar().subscribe(produto => {
      this.produtos = produto
    })
  }

}
