import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password:string): Observable<boolean> {
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu');

    //Je simule un delay de connection 
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }


}



