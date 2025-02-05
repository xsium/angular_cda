import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgFor],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth:boolean=true;
  friendlistName :string ="";
  searchresult:string="aucun résultats...";
  listFriendTab : {name : string; age : number; mail : string;}[]= [
    {name : "Alita", age : 300, mail : "rockridgecity@nova.com"},
    {name: 'Tyrfing', age: 32, mail: 'tyrfing@valhalla.com' },
    {name: 'Charlie', age: 35, mail: 'charlie@nowhere.com' }
  ];
  profil!: {name : string; age : number; mail : string;};
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
  onNameOutput(name: string){
    console.log("display list friend name :");
    console.log(name);
    this.friendlistName= name;
  }

}