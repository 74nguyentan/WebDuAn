import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-impormation',
  templateUrl: './user-impormation.component.html',
  styleUrls: ['./user-impormation.component.css']
})
export class UserImpormationComponent implements OnInit {
  isShowFormUser = false;
  constructor() { }

  ngOnInit(): void {
  }
  hoantat(){
    this.isShowFormUser = false;
  }
}
