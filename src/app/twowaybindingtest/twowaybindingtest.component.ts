import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybindingtest',
  imports: [FormsModule],
  templateUrl: './twowaybindingtest.component.html',
  styleUrl: './twowaybindingtest.component.css'
})
export class TwowaybindingtestComponent {
 
  dataInput:string="Random user";
  resetInput() {
    this.dataInput = '';
  }
}
