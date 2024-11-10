import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.signOut();
    this.navCtrl.navigateBack('/', { replaceUrl: true });
  }

  onBack() {
    this.navCtrl.pop();
  }

  goToPage(page: string) {
    this.navCtrl.navigateForward(`settings/${page}`);
  }
}
