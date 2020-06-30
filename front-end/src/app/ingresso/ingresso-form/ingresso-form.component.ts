import { Component, OnInit } from '@angular/core';
import { IngressoService } from '../ingresso.service';

@Component({
  selector: 'app-ingresso-form',
  templateUrl: './ingresso-form.component.html',
  styleUrls: ['./ingresso-form.component.css']
})
export class IngressoFormComponent implements OnInit {

  ingresso: any = {
    nome: '',
    RG: null,
    tipo_ingresso: '',
    vaga: false,
    n_vaga: null
  }
  constructor(private ingressoService: IngressoService) { }

  ngOnInit(): void {
  }
  async cadastrar() {
    await this.ingressoService.novo(this.ingresso)
  }  

}
