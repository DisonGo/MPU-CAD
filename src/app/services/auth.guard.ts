import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  LoginService
} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise < boolean > {
    return new Promise(async (resolve, reject) => {
      try{
        await this.login.isLoggedIn()
        resolve(true);
      }catch(e){
        console.log("Not authorized");
        resolve(false);
        this.router.navigate(['/admin'])
      }

    })
  }
}
