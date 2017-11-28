import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

import { User } from './user.form';

@Injectable()
export class AuthService {
  public user: User;
  constructor(
    private tokenService: Angular2TokenService
  ) { }

  public signUp(user: User): Observable<Response> {
    // call angular2-token signup method here!
    // Returns an Observable<Response>
    return null;
  }

  public signIn(uid: string, password: string): Observable<Response> {
    // call angular2-token signin method here!
    // Returns an Observable<Response>
    return null;
  }


  public signOut(): Observable<Response> {
    // call angular2-token signOut method here!
    // Returns an Observable<Response>
    return null;
  }

  public isSignedIn(): boolean {
    // call angular2-token userSignedIn method here!
    // Returns an boolean
    return null;
  }

  private handleErrors(errors: Response): Observable<Response> {
    console.log('Tratar o erro capturado, ex.: gravar em um log de erros', errors);
    return Observable.throw(errors);
  }
}
