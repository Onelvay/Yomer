import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ access_token: string }>(
      'http://localhost:8080/auth/sign-in',
      { username, password }
    );
  }
  // sendTestToken(username: string, password: string) {
  //   const testToken = 'myTestToken';
  //   this.http.post('/api/authenticate', { token: testToken }).subscribe();
  //   const req = this.httpTestingController.expectOne('/api/authenticate');
  //   req.flush({ token: 'myResponseToken' });
  // }    
  
}
