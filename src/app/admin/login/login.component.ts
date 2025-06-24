import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    private auth = inject(Auth)
    private router = inject(Router)
    
    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)

    })

    login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (!email || !password) {
      alert('Email and password are required!');
      return;
    }

    signInWithEmailAndPassword(this.auth, email, password)
      .then(userCred => {
        console.log('Logged in!', userCred);
        this.router.navigate(['/admin-home']);
      })
      .catch(err => {
        alert('Login failed: ' + err.message);
      });
  }

}
