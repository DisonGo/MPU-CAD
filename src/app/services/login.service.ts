import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import {
  map,
  shareReplay
} from 'rxjs/operators';

import {
  Injectable
} from '@angular/core';
import {
  environment
} from 'src/environments/environment';
import {
  User
} from '../shared/user.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.serverUrl
  login(email: string, password: string) {
    return this.http.post < User > (this.apiUrl + '/login', {
        email,
        password
      })
      .pipe(map(res => {
        this.setSession(res)
        return true
      }), shareReplay())
  }
  private setSession(authResult:any) {
    localStorage.setItem('id_token', authResult.id_token);
  }

  logout() {
    localStorage.removeItem("id_token");
  }

  public isLoggedIn() {
    const token = localStorage.getItem('id_token')
    let headers = new HttpHeaders({"Authorization":"Bearer "+token})
    headers.set("Authorization","Bearer "+token)
    return this.http.get(this.apiUrl+'/login/admin',{headers}).toPromise()
  }
}
