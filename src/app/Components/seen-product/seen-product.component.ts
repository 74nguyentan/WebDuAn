import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { HistoryService } from 'src/app/Service/history.service';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from 'src/app/model/History';

@Component({
  selector: 'app-seen-product',
  templateUrl: './seen-product.component.html',
  styleUrls: ['./seen-product.component.css']
})
export class SeenProductComponent implements OnInit {
  history: History = new History();
  id: string;
  p: number;

  constructor(private route: ActivatedRoute,
    private router: Router,public authService: AuthService,
    private historyservice: HistoryService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.history = new History();
    this.id = this.authService.user_id();
    this.historyservice.getHistory(this.id).subscribe(data => {
      this.history = data;
       if(this.history.matHang.trangThai = true){
        this.history.matHang.trangThai = "Còn hàng";
       }
       else{
        this.history.matHang.trangThai = "Hết hàng";
       }
       this.history = this.history;
      console.log(this.history);
    }, error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
