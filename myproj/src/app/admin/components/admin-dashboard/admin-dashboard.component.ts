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
    NzButtonModule,
    NzAutosizeDirective,
    NzFormModule,
    NzInputModule,
    NzRowDirective,
    NzSelectModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzSelectComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminDashboardComponent implements OnInit{
  username: string = 'Adminov Admin';
  showCreateForm = false;
   createForm!: FormGroup;
   visible = false;
   isEditDrawerVisible = false;
editForm!: FormGroup;
selectedUserId!: number;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
    createMessage(type: string): void {
    this.message.create(type, `User deleted successfully`);
  }
  users: MyUser[] = [];
  constructor(private fb: FormBuilder, private userService: UserService, private message: NzMessageService) {}
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
     this.editForm = this.fb.group({
    username: [''],
    roles: ['']
  });
  }
createUser() {
  const newUser = this.createForm.value;
  this.userService.createUser(newUser).subscribe({
    next: () => {
      this.loadUsers();
      this.createForm.reset();
      this.showCreateForm = false;
      this.message.create('success', `User created successfully`);
    },
    error: err => console.error(err)
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

  page = 1;
   itemsPerPage = 10;
  loading = true;
  perPageOptions = [5, 10, 20, 50];

}
