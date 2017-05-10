import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNums = Observable.interval(1000);
    // myNums.subscribe(
    //   (num: number) => {
    //     console.log(num);
    //   }
    // );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('First package');
        }, 2000);
        setTimeout(() => {
          observer.next('Second package');
        }, 4000);
        setTimeout(() => {
          // observer.error('This does not work');
          observer.complete();
        }, 5000);
      });

    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

}
