import { Component, inject } from '@angular/core';
import { Blog } from '../blogs/blogs.component';
import { BlogService } from '../../services/blog.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  private firestore: Firestore = inject(Firestore);

  blog$: Observable<Blog> | null = null;
  private route = inject(ActivatedRoute);

  ngOnInit(){
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      const blogRef = doc(this.firestore, `Blogs/${blogId}`);
      this.blog$ = docData(blogRef) as Observable<Blog>;
    }
  }

}
