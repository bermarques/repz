import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EChartsOption } from 'echarts';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  private minutesToHour = (value: number) => {
    const hours = Math.floor(value / 60);
    return `${hours}h`;
  };

  options: EChartsOption = {
    legend: {
      data: ['Essa semana', 'Semana passada'],
      itemWidth: 14,
      left: '3%',
      icon: 'circle',
      textStyle: {
        color: '#848A9C',
        fontSize: 14,
        fontFamily: 'Inter',
        padding: 4,
      },
      itemGap: 20,
    },
    grid: { bottom: '10%' },
    xAxis: {
      type: 'category',
      data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    },
    yAxis: { type: 'value', axisLabel: { formatter: this.minutesToHour } },
    series: [
      {
        name: 'Essa semana',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        color: '#04BFDA',
        barWidth: 5,
        itemStyle: { borderRadius: [5, 5, 0, 0] },
      },
      {
        name: 'Semana passada',
        data: [180, 250, 120, 86, 50, 140, 50],
        type: 'bar',
        color: '#FFA84A',
        barWidth: 5,
        itemStyle: { borderRadius: [5, 5, 0, 0] },
      },
    ],
  };

  mergeOptions: EChartsOption;

  goToPage(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
