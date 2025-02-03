import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-text-interpolation',
  imports: [],
  templateUrl: './lesson-text-interpolation.component.html',
  styleUrl: './lesson-text-interpolation.component.css'
})
export class LessonTextInterpolationComponent {
title: string="bienvenue";
description: string="description";
currentdate: Date = new Date();
username: string = "Tyrfing";
items: string[] = ["item1", "item2", "item3"];

getWelcomeMsg(): string {
  return `coucou, ${this.username}`;
}
}