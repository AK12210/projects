import { Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    RouterLink,
    NgxPaginationModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent{
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
   itemsPerPage = 10;

  perPageOptions = [5, 10, 20, 50];
}
