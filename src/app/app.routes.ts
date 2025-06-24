import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'blogs/:id', component: BlogDetailsComponent},
    {path: 'admin', component: LoginComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'admin-home/blogs', component: AdminBlogsComponent}
];  
