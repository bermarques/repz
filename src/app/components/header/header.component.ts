import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() showBackArrow: boolean = true;

  constructor(private location: Location) {}

  ngOnInit() {}

  onBack() {
    this.location.back();
  }
}
