import { Injectable } from '@angular/core';
import {environment} from '@env';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor() { }
  get apiUrl(): string {
    return environment.production ? '' : '';
  }
}
