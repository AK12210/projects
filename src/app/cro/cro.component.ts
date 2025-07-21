import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-cro',
  imports: [
    FormsModule,
    NgStyle
  ],
  templateUrl: './cro.component.html',
  styleUrl: './cro.component.css'
})
export class CroComponent {
   isDisabled = true;

  onCheckboxChange(type: 'enable' | 'disable') {
    this.isDisabled = type === 'disable';
  }
  isDisabled1 = true;

  onCheckboxChange1(type: 'enable' | 'disable') {
    this.isDisabled1 = type === 'disable';
  }
}
