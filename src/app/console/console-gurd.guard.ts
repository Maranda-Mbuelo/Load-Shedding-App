import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoadsheddingService } from 'src/services/loadshedding.service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleGuard implements CanActivate {

  constructor(private router: Router, private loadsheddingService: LoadsheddingService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.loadsheddingService.apiResponse) {
      return true;
    } else {
      return this.router.createUrlTree(['/']);
    }
  }
}
