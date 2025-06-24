import { Component } from '@angular/core';
import { Blog } from '../blogs/blogs.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  blog: Blog | null = null;
  constructor( private blogService: BlogService){}

  ngOnInit(){
    this.blog = this.blogService.getBlog();
    if(!this.blog){
      
    }
  }

}
