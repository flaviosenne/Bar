import { Component, OnInit } from '@angular/core';
import { PromotorService } from '../promotor.service';

@Component({
  selector: 'app-promotor-list',
  templateUrl: './promotor-list.component.html',
  styleUrls: ['./promotor-list.component.css']
})
export class PromotorListComponent implements OnInit {

  promotor = []
  constructor(private promotorService: PromotorService) { }

  ngOnInit(): void {
    this.promotorService.listar().subscribe(promotor => {
      this.promotor = promotor
    })
  }

}
