import { Router } from '@angular/router';
import { AuthService } from './../../Service/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-shop-impormation',
  templateUrl: './shop-impormation.component.html',
  styleUrls: ['./shop-impormation.component.css']
})
export class ShopImpormationComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
