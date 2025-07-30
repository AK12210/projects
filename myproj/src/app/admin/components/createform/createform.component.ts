import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {UserService, MyUser} from '../admin-dashboard/user.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-createform',
    imports: [
        FormsModule,
        NgIf,
        NzButtonComponent,
        NzIconDirective,
        NzInputDirective,
        NzWaveDirective,
        ReactiveFormsModule
    ],
  templateUrl: './createform.component.html',
  styleUrl: './createform.component.css'
})
export class CreateformComponent implements OnInit{
  showCreateForm = false;
  createForm!: FormGroup;
  users: MyUser[] = [];

  constructor(private fb: FormBuilder, private userService: UserService, private message: NzMessageService) {}

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
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
      this.message.create('success', `User created successfully`);
    },
    error: err => console.error(err)
  });
}
}
