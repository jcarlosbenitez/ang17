import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

@Injectable()
export class AuthService {

    constructor(){
        
    }
    singInCredential(email:string,password:string){
        let userNameStorage;
        let emailStorage;
        const auth = getAuth();
        const dataUser = signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in        
            console.log('userCredential_auth',userCredential)
            userNameStorage = userCredential.user.displayName ;
            emailStorage = userCredential.user.email;
            localStorage.setItem('userName', userNameStorage!);
            localStorage.setItem('email', emailStorage!) ;
            })

        return dataUser
      }
}