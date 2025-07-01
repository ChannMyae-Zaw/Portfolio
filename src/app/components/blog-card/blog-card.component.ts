import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../pages/blogs/blogs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {

  private router = inject(Router)
  @Input() blog!: Blog;

  @Output() blogSelected = new EventEmitter<Blog>();

  onCardClick() {
      if (this.blog && this.blog.id) {
      this.router.navigate(['/blogs', this.blog.id]);
    }
  }
}
