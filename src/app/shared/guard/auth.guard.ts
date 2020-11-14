import { MatDialog } from '@angular/material/dialog';
import { FailDialogComponent } from './../../Dialog/fail-dialog/fail-dialog.component';
import { AuthService } from './../../Service/auth.service';
import { Router } from '@angular/router';
import { Injectable,Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    public authService: AuthService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn !== true) {
        this.router.navigate([])
        // this.router.navigate(['login'])
        const confirmDialog = this.dialog.open(FailDialogComponent, {
          data: {
            title: 'Bạn chưa đăng nhập !',
            message: 'Vui lòng đăng nhập để bán hàng !',
          },
        })
      }
    return true;
  }

}
