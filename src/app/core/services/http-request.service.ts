import { Injectable } from '@angular/core';
import {environment} from '@env';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '@core/services/configuration.service';
import {Observable} from 'rxjs';
import {LocalStorageService} from '@core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  apiUrl = '';
  constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService,
    private localStorageService: LocalStorageService
  ) {
    this.apiUrl = configurationService.apiUrl;
  }

  public fileRequest(endpoint: string, data?: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/api/${endpoint}`, data,
      { headers: {Authorization: `Bearer ${this.localStorageService.getItem('token')}` } });
  }

  public request(method = 'get', endpoint: string, data?: any, authorised: boolean = true): Observable<any> {
    let observable: any;
    const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.localStorageService.getItem('token') };
    if (!authorised) {
      delete headers.Authorization;
    }
    switch (method) {
      case 'post':
        observable = this.httpClient.post(`${this.apiUrl}/api/${endpoint}`, data, { headers });
        break;
      case 'put':
        observable = this.httpClient.put(`${this.apiUrl}/api/${endpoint}`, data, { headers });
        break;
      case 'delete':
        observable = this.httpClient.delete(`${this.apiUrl}/api/${endpoint}`, { headers });
        break;
      default:
        observable = this.httpClient.get(`${this.apiUrl}/api/${endpoint}`, { params: data, headers });
    }
    return observable;
  }
}
