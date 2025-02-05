import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {

  title: string = "";
  content: string ="";
  author: string ="";
  date: Date = this.getDate()

  getDate() :Date {
    return new Date();
  }

    
  @Output() sendArticle = new EventEmitter< { title: string; content: string; author: string; date: Date }>();
  @Output() sendBrouillon = new EventEmitter< { title: string; content: string; author: string; date: Date }>();

  addArticle() {
    const article: { title: string; content: string; author: string; date: Date }= {title:this.title, content:this.content, author:this.author, date:this.date};
    this.sendArticle.emit(article);
  }
  addBrouillon(){
    const article: { title: string; content: string; author: string; date: Date }= {title:this.title, content:this.content, author:this.author, date:this.date};
    this.sendBrouillon.emit(article);
  }
}