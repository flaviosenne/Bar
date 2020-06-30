import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  prop = 'nav'
  constructor() { }

  ngOnInit(): void {
  }

  click(): void {
    if(this.prop == 'none'){
      this.prop = 'nav'
    }else{
      this.prop = 'none'
    }
  }

}
