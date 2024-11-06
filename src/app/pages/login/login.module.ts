import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AlternativeLoginsComponent } from 'src/app/components/alternative-logins/alternative-logins.component';
import { DividerComponent } from 'src/app/components/divider/divider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    AlternativeLoginsComponent,
    DividerComponent,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
