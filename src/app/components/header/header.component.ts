import { CommonModule, Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() leftControl?: 'icon' | 'text';
  @Input() rightControl?: 'icon' | 'text';
  @Input() rightText?: string = '';
  @Input() leftText?: string = '';

  @Output() onLeftControlClick? = new EventEmitter();
  @Output() onRightControlClick? = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleLeftControlClick() {
    this.onLeftControlClick.emit();
  }

  handleRightControlClick() {
    this.onRightControlClick.emit();
  }
}
