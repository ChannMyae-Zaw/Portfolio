import { Injectable } from '@angular/core';
import { Blog } from '../pages/blogs/blogs.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private selectedBlog: Blog | null = null;
  constructor() {}
    
  setBlog(blog: Blog){
    this.selectedBlog = blog;
  }

  getBlog(): Blog | null {
    return this.selectedBlog;
  }
}
