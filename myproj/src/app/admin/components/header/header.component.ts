import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    NzIconDirective
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string = 'Adminov Admin';
}
