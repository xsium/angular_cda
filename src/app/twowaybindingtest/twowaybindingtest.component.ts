import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybindingtest',
  imports: [RouterModule, FormsModule],
  templateUrl: './twowaybindingtest.component.html',
  styleUrl: './twowaybindingtest.component.css'
})
export class TwowaybindingtestComponent {
 
  dataInput:string="Random user";
  resetInput() {
    this.dataInput = '';
  }
}
