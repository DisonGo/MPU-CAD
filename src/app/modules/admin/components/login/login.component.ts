import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  LoginService
} from 'src/app/services/login.service';
import {
  Project
} from 'src/app/shared/project.interface';
import {
  TeamWorker
} from 'src/app/shared/team-worker.interface';
import {
  environment
} from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: LoginService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          (res) => {
            if (res) {
              console.log("User is logged in");
              this.router.navigate(['admin', 'panel']);
            }
          }
        );
    }
  }
  async ngOnInit(): Promise<void> {
    try {
      await this.authService.isLoggedIn()
      console.log("User is logged in");
      this.router.navigate(['admin', 'panel']);
    } catch (e) {
      // console.log(e);
    }
  }

}
