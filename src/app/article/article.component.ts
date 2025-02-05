import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
@Input() article! : {id: number; title: string; content: string; author: string; date: Date; type: string } ;
}
