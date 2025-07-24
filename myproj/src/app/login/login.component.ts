import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router, Route} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzButtonSize, NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, CommonModule, NzButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  size: NzButtonSize = 'large';

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.http.get<any>("http://localhost:8080/api/users").subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
        if (user) {
          this.loginForm.reset()
          this.router.navigate(["admin"])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")
      })
  }
}
