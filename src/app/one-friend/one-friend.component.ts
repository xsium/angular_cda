import { Component, Output,EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId: number=1;
  oneFriendName: string="Tyrfing";
  oneFriendAge: number = 32;
  oneFriendStatus : string = this.createOneFriendStatus();
  oneFriendBio : string = "ma life, lorem ipsum dolor sit amet, blablabla...";
  oneFriendXss : string = "<script>alert('Hello, XSS')</script>";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";
  createOneFriendStatus() : string {
     if(Math.random()>0.5){
      return "Online";
    }
    return "Offline";
  }
  getOneFriendStatus() : string {
    return this.oneFriendStatus;
  }
  getColor() : string {
    if (this.getOneFriendStatus().localeCompare("Offline")){
      console.log("red");
      return ("red");
    }
    else {
      console.log("green");
      return("green");
    }
  }
  @Output() nameEvent = new EventEmitter<string>();

  nameOutput(name :string){
    this.nameEvent.emit(name);
    console.log( "emitting friend name"+ name );
  }
  constructor(){
    setTimeout(() => {
      this.nameOutput(this.oneFriendName);
    }, 3000);
  }
}
