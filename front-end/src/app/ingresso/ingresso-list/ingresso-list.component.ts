import { Component, OnInit } from '@angular/core';
import { IngressoService } from './../ingresso.service';

@Component({
  selector: 'app-ingresso-list',
  templateUrl: './ingresso-list.component.html',
  styleUrls: ['./ingresso-list.component.css']
})
export class IngressoListComponent implements OnInit {

  ingresso = []
  constructor(private ingressoService: IngressoService) { }

  ngOnInit(): void {
    this.ingressoService.listar().subscribe(ingresso => {
      this.ingresso = ingresso
      console.log(ingresso)
    })
  }

}
