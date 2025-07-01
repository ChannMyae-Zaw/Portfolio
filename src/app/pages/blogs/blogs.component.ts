import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Firestore, collection, collectionData} from '@angular/fire/firestore'
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [HeaderComponent, CommonModule, BlogCardComponent,],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  private firestore: Firestore = inject(Firestore);
  blogs$: Observable<Blog[]>;
  filteredBlogs$: Observable<Blog[]>;
  selectedCategory: string = 'All';
  
  constructor(
      private blogService: BlogService,
      private router: Router
  ){
    const blogCollection = collection(this.firestore, 'Blogs');
    this.blogs$ = collectionData(blogCollection, {idField: 'id'}) as Observable<Blog[]>;
    this.filteredBlogs$ = this.blogs$;
  }

  filterByCategory(category: string){
    this.selectedCategory = category;
    this.filteredBlogs$ = this.blogs$.pipe(
    map(blogs =>
      category === 'All' ? blogs : blogs.filter(blog => blog.category === category)
      )
    );
  }

  ngOnInit() {
  this.filterByCategory('All');
}

  navigateToBlog(blog: Blog) {
  this.blogService.setBlog(blog);
  this.router.navigate(['/blogs', blog.id]);
}

}

export interface Blog{
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
}