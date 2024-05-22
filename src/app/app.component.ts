import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AngularFireAuthModule } from  "@angular/fire/compat/auth" ; 
import { AngularFireModule } from  "@angular/fire/compat" ;
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, from } from 'rxjs';
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import { FormBuilder, FormControl, FormGroup, Validators ,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

interface Item {
  displayName: string
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'rm-web-hosting';
}
 
  // item$: Observable<Item[]>;
  // firestore: Firestore = inject(Firestore);
  // hiden= false
  // msjError: string = ''
  // loginForm: FormGroup;

  // constructor(private fb: FormBuilder) {
    
    // this.loginForm = this.fb.group({
    //   email: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])

    // });
  
    // const itemCollection = collection(this.firestore, 'webUsers');
    // this.item$ = collectionData(itemCollection) as Observable<Item[]>;
    // console.log('this.item$',this.item$.forEach(u => {console.log(u)} ))
    

  // }


  // singIn(){
    
  //   console.log('login',this.loginForm)
  //   const password = this.loginForm.get('password')!.value 
  //   const email = this.loginForm.get('email')!.value ;
    
  //   console.log('password',password)
  //   console.log('email',email)
   
  //   let userNameStorage;
  //   let emailStorage;
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       console.log('userCredential',userCredential)
  //       const user = userCredential.user;
  //       userNameStorage = userCredential.user.displayName ;
  //       emailStorage = userCredential.user.email;
  //       localStorage.setItem('userName', userNameStorage!);
  //       localStorage.setItem('email', emailStorage!) ;
        
  //       console.log('user',user)
  //     })
  //     .catch((error) => {
  //       this.hiden = true
  //       this.msjError = 'El nombre de usuario y/o la contraseña son incorrectos'
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // }

  // okDialog(){
  //   this.hiden = false
  // }

  
// }
