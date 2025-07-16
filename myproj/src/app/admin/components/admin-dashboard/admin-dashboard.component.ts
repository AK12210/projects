import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    RouterLink,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    NzTableComponent,
    NzIconDirective
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminDashboardComponent implements OnInit{
  username: string = 'Adminov Admin';
    items = Array.from({ length: 50 }, (_, i) => ({
    id: i + 230001,
    code: "AD",
    name: "Active directory",
    description: "very interesting",
    comment: "to do tomorrow",
    isActual: true,
    isCritical: false,
    createdDate: "2025-03-28"
  }));
  page = 1;
  ngOnInit(): void {
  setTimeout(() => {
    this.loading = false;
  }, 600);
}
   itemsPerPage = 10;
  loading = true;
  perPageOptions = [5, 10, 20, 50];
}
