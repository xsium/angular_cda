import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
@Input() article = { title: "", content: "", author: "", date: new Date(), type: "" };
}
