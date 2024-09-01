import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigGlobalURL {
  private apiUrl: string = 'http://localhost:3003/';

  constructor() {}

  getApiUrl(): string {
    return this.apiUrl;
  }

  setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}
