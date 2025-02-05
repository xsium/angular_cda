import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userdisplay',
  imports: [],
  templateUrl: './userdisplay.component.html',
  styleUrl: './userdisplay.component.css'
})
export class UserdisplayComponent {
  @Input() user! : {name: string; age: number; } ;
}
