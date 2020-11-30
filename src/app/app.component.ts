import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './Service/auth.service';
import { MessengerService } from './Service/messenger.service';
import { Messenger } from 'src/app/model/Messenger';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopDuAn';
  messbox = false;
  boxchat = false;
  id: string; 
  messenger: Messenger = new Messenger();
  messenger1: any;
  messenge3: any;
  adddd: any;

  constructor(private route: ActivatedRoute,
    private router: Router,public authService: AuthService,
    private messengerservice: MessengerService) { }
    
  ngOnInit(): void {
   this.loadfromuser();
  }

  loadfromuser(){
    this.messenger = new Messenger();
    this.id = this.authService.user_id();
    this.messengerservice.gettomessenger(this.id).subscribe(data => {
     this.messenger =data;
    }, error => console.log(error));
    
  }
  idtouser(id: string){
    console.log(id);
    this.id = id;
    this.messenger1 = new Messenger();
    this.messengerservice.getfrommessenger(this.id).subscribe(data => {
      this.messenger1 = Object.assign({}, ...data);
      console.log(data);
    });
  }
}

