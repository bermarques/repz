import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SignupPage } from './signup.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
