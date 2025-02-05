import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usereditor',
  imports: [FormsModule],
  templateUrl: './usereditor.component.html',
  styleUrl: './usereditor.component.css'
})
export class UsereditorComponent {
  name: string = "";
  age: number =0;
 @Output() sendUser = new EventEmitter<{ name: string; age: number }>();

  updateUser() {
    const user: { name: string; age: number ; }= {name:this.name, age:this.age};
    this.sendUser.emit(user);
  }
}
