import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdisplayComponent } from '../userdisplay/userdisplay.component';
import { UsereditorComponent } from '../usereditor/usereditor.component';

@Component({
  selector: 'app-usermanager',
  imports: [CommonModule, UserdisplayComponent, UsereditorComponent],
  templateUrl: './usermanager.component.html',
  styleUrl: './usermanager.component.css'
})
export class UsermanagerComponent {
  user :{name: string; age:number}={name: "Tyrfing", age: 32};

  onUserUpdated(user :{name:string; age:number;}){
    this.user.name=user.name;
    this.user.age=user.age;
  }

}
