import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  private router = inject(Router)

  goToBlogs(){
    this.router.navigate(['/admin-home/blogs'])
  }
}
