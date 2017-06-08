import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    // return this.http.post('https://http-2af22.firebaseio.com/data.json',
    //   servers,
    //   { headers: headers }
    // );

    return this.http.put('https://http-2af22.firebaseio.com/data.json',
      servers,
      { headers: headers }
    );
  }

  getServers() {
    return this.http.get('https://http-2af22.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const servers = response.json();

          for (const server of servers) {
            server.name = `FETCHED_${server.name}`;
          }

          return servers;
        }
      )
      .catch((error: Response) => {
        return Observable.throw(new Error('Something went wrong!'));
      });
  }

  getAppName() {
    return this.http.get('https://http-2af22.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
