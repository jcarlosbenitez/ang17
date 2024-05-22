import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  firestore: Firestore = inject(Firestore);
  hiden= false
  msjError: string = ''
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private AuthService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
  
    });
  }

  singIn(){
    console.log('login',this.loginForm)
    const password = this.loginForm.get('password')!.value 
    const email = this.loginForm.get('email')!.value ;
    
    console.log('password',password)
    console.log('email',email)

    this.AuthService.singInCredential(email,password).then(resp => {
      this.router.navigate(['home']);
    }).catch( error=>{
      this.hiden = true
        this.msjError = 'El nombre de usuario y/o la contraseña son incorrectos'
        const errorCode = error.code;
        const errorMessage = error.message;
    })
  }

  okDialog(){
    this.hiden = false
  }


}
