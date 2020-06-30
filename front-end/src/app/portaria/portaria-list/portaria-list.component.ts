import { Component, OnInit } from '@angular/core';
import { PortariaService } from '../portaria.service';

@Component({
  selector: 'app-portaria-list',
  templateUrl: './portaria-list.component.html',
  styleUrls: ['./portaria-list.component.css']
})
export class PortariaListComponent implements OnInit {

  portaria: any =  []
  constructor(private portariaService: PortariaService) { }

  ngOnInit(): void {
    this.portariaService.listar().subscribe(portaria => {
      this.portaria = portaria
    })
            
  }

}
