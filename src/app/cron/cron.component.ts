import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-cron',
  imports: [
    RouterLink,
    NzIconDirective
  ],
  templateUrl: './cron.component.html',
  styleUrl: './cron.component.css'
})
export class CronComponent {
  username: string = 'Adminov Admin';
}
