import { Component, OnInit } from '@angular/core';
import { BarService } from './../bar.service';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.css']
})
export class BarFormComponent implements OnInit {

  bar: any = {
    produto_nome: '',
    quantidade_produto: null,
    entrada_fichas: null,
    troco: 0,
    ingresso_vinc: ''
  }
  constructor(private barService: BarService) { }

  ngOnInit(): void {
  }

  async cadastrar() {
    console.log(this.bar)
    await this.barService.novo(this.bar)
    alert('Entrei')
  }
}
