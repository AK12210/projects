import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cron',
  imports: [
    RouterLink
  ],
  templateUrl: './cron.component.html',
  styleUrl: './cron.component.css'
})
export class CronComponent {
  username: string = 'Adminov Admin';
}
