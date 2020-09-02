import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {LocalStorageService} from '@core/services/local-storage.service';
interface AuthState {
  authenticated: boolean;
  user: any | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationState: ReplaySubject<AuthState> = new ReplaySubject<AuthState>(1);
  constructor(
    private localStorageService: LocalStorageService
  ) {
    /**
     * Check Logged in Logic
     */
    const user = localStorageService.getItem('user');
    // const token = localStorageService.getItem('token');
    // const expiry = localStorageService.getItem('expiry');
    const authenticated = !!user;
    this.authenticationState.next({authenticated, user: user || null});
  }
  public get authState(): Observable<AuthState> {
    return this.authenticationState as Observable<AuthState>;
  }
  public getLocalUser(): any {
    return this.localStorageService.getItem('user');
  }
  private setLocalUser(user: any) {
    this.localStorageService.setItem('user', user);
  }
  private setLocalToken(token: string) {
    this.localStorageService.setItem('token', token);
  }
  public async login(email: string, password: string){
    /**
     * Replace Login through API Call
     */
    return new Promise<any>((resolve, reject) => {
      const demoUser = {name: 'Administrator', email: 'admin@test.com'};
      this.setLocalUser(demoUser);
      this.setLocalToken('65465fasd4f6a8sdf49dsf84sd5f4sa5');
      this.authenticationState.next({authenticated: true, user: demoUser});
      resolve(demoUser);
    });
  }
  public async logout() {
    /**
     * Replace with API Call
     */
    return new Promise<any>((resolve, reject) => {
      this.localStorageService.removeItem('user');
      this.localStorageService.removeItem('token');
      this.authenticationState.next({authenticated: false, user: null});
      resolve();
    });
  }
}
