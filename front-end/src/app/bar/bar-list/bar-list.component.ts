import { Component, OnInit } from '@angular/core';
import { BarService } from './../bar.service';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {

  constructor(private barService: BarService) { }

  Bares = []

  ngOnInit(): void {
    this.barService.listar().subscribe(bar => {
      this.Bares = bar  
      console.log(bar)
    })
    
  }
    
}

