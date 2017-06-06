import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    return this.http.post('https://http-2af22.firebaseio.com/data.json', servers);
  }
}
