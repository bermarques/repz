import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.signOut();
    this.navCtrl.navigateBack('/', { replaceUrl: true });
  }
}
