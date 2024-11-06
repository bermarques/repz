import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  async signIn() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.loginUser(email, password).then(
      () => {
        loading.dismiss();
        this.router.navigate(['/home']);
      },
      (error) => {
        loading.dismiss();
      }
    );
  }
}
