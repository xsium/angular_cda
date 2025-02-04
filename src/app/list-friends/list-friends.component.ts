import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth:boolean=true;
  searchresult:string="aucun résultats...";
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = false;
    }, 3000);
  }
  readEvent(e : Event): void {
    (<HTMLInputElement>e.target).innerHTML="Ajouté!";
    setTimeout(() => {
      (<HTMLInputElement>e.target).innerHTML="Ajouter un ami";
    }, 3000);
  }
  readInput(e : Event): void {
    this.searchresult = (<HTMLInputElement>e.target).value;
  }
friendlistName :string ="";
  onNameOutput(event: Event) {
    console.log(event);

  }
}