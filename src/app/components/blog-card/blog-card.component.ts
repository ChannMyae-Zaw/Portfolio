import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../pages/blogs/blogs.component';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {


  @Input() blog!: Blog;

  @Output() blogSelected = new EventEmitter<Blog>();

  onCardClick() {
    this.blogSelected.emit(this.blog);
  }
}
