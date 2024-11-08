import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { confirmPasswordValidator } from './confirm-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group(
      {
        fullname: ['', [Validators.required]],
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
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
          ],
        ],
      },
      { validators: confirmPasswordValidator }
    );
  }

  get errorControl() {
    return this.regForm.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      const user = await this.authService
        .registerUser(this.regForm.value.email, this.regForm.value.password)
        .catch((err) => {
          this.presentToast(err);
          loading.dismiss();
        });

      if (user) {
        loading.dismiss();
        this.presentToast('Usuário criado com sucesso!');
        this.navCtrl.pop();
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
