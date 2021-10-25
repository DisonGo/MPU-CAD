import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private login:LoginService,private router: Router) { }
  logOut(){
    this.login.logout()
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }

}
