import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public ngFireAuth: AngularFireAuth) {}

  async registerUser(email: string, password: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async googleLogin() {
    return await this.ngFireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  async facebookLogin() {
    return await this.ngFireAuth.signInWithPopup(new FacebookAuthProvider());
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }

  async getCurrentUser() {
    return await this.ngFireAuth.currentUser;
  }
}
