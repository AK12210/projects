import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import { UserService, MyUser } from './user.service';
import {NzModalComponent} from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    RouterLink,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    NzTableComponent,
    NzIconDirective,
    ReactiveFormsModule,
    NzModalComponent,
    NzButtonModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminDashboardComponent implements OnInit{
  username: string = 'Adminov Admin';
  showCreateForm = false;
   createForm!: FormGroup;
  users: MyUser[] = [];
  constructor(private fb: FormBuilder, private userService: UserService) {}
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

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number | undefined): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

ngOnInit(): void {
    this.loadUsers();

    this.createForm = this.fb.group({
      username: [''],
      password: [''],
      roles: [''],
      active: [false]
    });
  }
createUser() {
  const newUser = this.createForm.value;
  this.userService.createUser(newUser).subscribe({
    next: () => {
      this.loadUsers();
      this.createForm.reset();
      this.showCreateForm = false;
    },
    error: err => console.error(err)
  });
}
  page = 1;
   itemsPerPage = 10;
  loading = true;
  perPageOptions = [5, 10, 20, 50];

}
