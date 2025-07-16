import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router, Route} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzButtonSize, NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, CommonModule, NzButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  size: NzButtonSize = 'large';

  constructor(
    private router: Router,
    private authService: AuthService) {
  }
  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => alert(err.message)
    })
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }
}
