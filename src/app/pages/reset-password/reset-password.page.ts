import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],
    });
  }

  async reset() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const email = this.resetPasswordForm.get('email').value;

    this.authService
      .resetPassword(email)
      .then(() => {
        loading.dismiss();
        this.presentToast();
      })
      .catch(() => loading.dismiss());
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Seu link de recuperação de senha foi enviado para o seu email.',
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });
  }

  get errorControl() {
    return this.resetPasswordForm.controls;
  }
}
