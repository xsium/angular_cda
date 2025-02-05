import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

// Interface pour typer les articles
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-blog',
  imports: [NgFor, AddArticleComponent, ArticleComponent,CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  // Gestion des articles ajoutés
  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; }) {
    this.articles.push({id: this.articles.length+1, title: articleData.title, content: articleData.content,author:articleData.author,date:articleData.date,type: "article"});
  }

  // Gestion des brouillons ajoutés
  onBrouillonAdded(brouillonData: { title: string; content: string; author: string; date: Date; }) {
    this.articles.push({id: this.articles.length+1, title: brouillonData.title, content: brouillonData.content,author:brouillonData.author,date:brouillonData.date,type:"brouillon"});
}
}
