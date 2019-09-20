import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search = false;
  constructor() { }

  ngOnInit() {
  }
  showSearch(){
this.search = !this.search;
  }

  Search(){}
}
