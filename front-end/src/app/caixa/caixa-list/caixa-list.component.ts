import { Component, OnInit } from '@angular/core';
import { CaixaService } from '../caixa.service';

@Component({
  selector: 'app-caixa-list',
  templateUrl: './caixa-list.component.html',
  styleUrls: ['./caixa-list.component.css']
})
export class CaixaListComponent implements OnInit {

  caixa = []
  constructor(private caixaService: CaixaService) { }

  ngOnInit(): void {
    this.caixaService.listar().subscribe(caixa => {
      this.caixa = caixa
      console.log(caixa)
    })
  }

}
