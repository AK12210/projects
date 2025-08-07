import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cron',
  imports: [
    RouterLink,
    NzIconDirective,
    CommonModule
  ],
  templateUrl: './cron.component.html',
  styleUrl: './cron.component.css'
})
export class CronComponent {
  username: string = 'Adminov Admin';
   minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
}
