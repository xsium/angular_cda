import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
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

  createOneFriendStatus() : string {
     if(Math.random()>0.5){
      return "Online";
    }
    return "Offline";
  }
  getOneFriendStatus() : string {
    return this.oneFriendStatus;
  }
}
