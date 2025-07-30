import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {UserService, MyUser} from '../admin-dashboard/user.service';
import {NzModalComponent} from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import {NzAutosizeDirective} from 'ng-zorro-antd/input';
import {NzRowDirective} from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzSelectComponent} from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-table',
  imports: [
    RouterLink,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    NzTableComponent,
    NzIconDirective,
    ReactiveFormsModule,
    NzModalComponent,
    NzButtonModule,
    NzAutosizeDirective,
    NzFormModule,
    NzInputModule,
    NzRowDirective,
    NzSelectModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzSelectComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
    users: MyUser[] = [];
    page = 1;
    itemsPerPage = 10;
    perPageOptions = [5, 10, 20, 50];
    selectedUserId!: number;
    isEditDrawerVisible = false;
    editForm!: FormGroup;
    searchTerm = '';
loading = false;
ngOnInit(): void {
    this.loadUsers();
    this.onSearch();
     this.editForm = this.fb.group({
    username: [''],
    roles: ['']
  });
  }
    constructor(private fb: FormBuilder, private userService: UserService, private message: NzMessageService) {}

  onSearch(): void {
  this.loading = true;
  this.userService.getUsers(this.searchTerm).subscribe(data => {
    this.users = data;
    this.loading = false;
  });
}

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  openEditDrawer(user: MyUser): void {
  this.selectedUserId = user.id!;
  console.log('Opening drawer with user:', user);
  this.editForm.patchValue({
    username: user.username,
    roles: user.roles
  });
  this.isEditDrawerVisible = true;
}

  createMessage(type: string): void {
    this.message.create(type, `User deleted successfully`);
  }

    deleteUser(id: number | undefined): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  closeEditDrawer(): void {
  this.isEditDrawerVisible = false;
}

submitEdit(): void {
  if (this.editForm.valid) {
    const updatedUser = this.editForm.value;
    this.userService.updateUser(this.selectedUserId, updatedUser).subscribe(() => {
      this.loadUsers();
      this.closeEditDrawer();
    });
  }
}
}
