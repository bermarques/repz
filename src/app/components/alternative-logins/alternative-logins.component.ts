import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-alternative-logins',
  templateUrl: './alternative-logins.component.html',
  styleUrls: ['./alternative-logins.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AlternativeLoginsComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  onClickGoogle() {
    this.authService.googleLogin();
  }

  onClickFacebook() {
    this.authService.facebookLogin();
  }
}
