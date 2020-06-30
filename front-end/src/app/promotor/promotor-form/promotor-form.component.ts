import { Component, OnInit } from '@angular/core';
import { PromotorService } from './../promotor.service';

@Component({
  selector: 'app-promotor-form',
  templateUrl: './promotor-form.component.html',
  styleUrls: ['./promotor-form.component.css']
})
export class PromotorFormComponent implements OnInit {

  promotor: any = {
    nome: '',
    artistas: '',
    telefone: null,
    Estrutura: ''
  }
  constructor(private promotorService: PromotorService) { }

  ngOnInit(): void {
  }
  async cadastrar() {
    await this.promotorService.novo(this.promotor)
  }  

}
