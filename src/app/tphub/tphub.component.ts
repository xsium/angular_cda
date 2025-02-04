import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tphub',
  imports: [RouterLink,RouterModule, RouterLinkActive],
  templateUrl: './tphub.component.html',
  styleUrl: './tphub.component.css'
})
export class TphubComponent {

}
