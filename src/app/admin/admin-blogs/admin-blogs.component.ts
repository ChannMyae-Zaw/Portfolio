import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  Validators,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  Editor,
  Toolbar,
} from 'ngx-editor';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { schema } from 'ngx-editor/schema';
import { Blog } from '../../pages/blogs/blogs.component';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blogs',
  imports: [ NgxEditorComponent, FormsModule, NgxEditorMenuComponent, ReactiveFormsModule,
    
  ],
  templateUrl: './admin-blogs.component.html',
  styleUrl: './admin-blogs.component.css'
})

export class AdminBlogsComponent implements OnInit, OnDestroy {
  private firestore: Firestore = inject(Firestore);
  private router: Router = inject(Router);
  blogs$!: Observable<Blog[]>;
  blogsCollection!: CollectionReference;

  html = "Hello world!";
  editor!: Editor;
    toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // or, set options for link:
    //[{ link: { showOpenInNewTab: false } }, 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];

  form = new FormGroup({
    title: new FormControl('제목', Validators.required()),
    excerpt: new FormControl('소개개', Validators.required()),
    imageUrl: new FormControl('Cover Image', Validators.required()),
    editorContent: new FormControl('What are you thinking today?', Validators.required()),
    category: new FormControl('', Validators.required())
  });

  colorPresets = ['red', '#FF0000', 'rgb(255, 0, 0)'];

  ngOnInit(): void{
    this.editor = new Editor({
      schema,
    });
    this.blogsCollection = collection(this.firestore, 'Blogs') as CollectionReference<Blog>;
    this.blogs$ = collectionData(this.blogsCollection, { idField: 'id' }) as Observable<Blog[]>;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  publishBlog(){

    if (this.form.invalid) return;

    const blogData: Blog = {
      title: this.form.value.title || '',
      excerpt: this.form.value.excerpt || '',
      imageUrl: this.form.value.imageUrl || '',
      content: this.form.value.editorContent || '',
      category: this.form.value.category || ''
    };
      addDoc(this.blogsCollection, blogData).then((DocumentReference: DocumentReference)=>{
          this.form.reset();
          this.router.navigate(['/admin-home'])
      })
  }
}
