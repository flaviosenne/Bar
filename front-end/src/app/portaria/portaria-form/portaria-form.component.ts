import { Component, OnInit } from '@angular/core';
import { PortariaService } from '../portaria.service';

@Component({
  selector: 'app-portaria-form',
  templateUrl: './portaria-form.component.html',
  styleUrls: ['./portaria-form.component.css']
})
export class PortariaFormComponent implements OnInit {

  portaria: any = {
    nome: '',
    RG: null,
    ingresso_valido: true,
    validado: true
  }
  constructor(private portariaService: PortariaService) { }

  ngOnInit(): void {
  }
  async cadastrar() {
    await this.portariaService.novo(this.portaria)
  }  

}
