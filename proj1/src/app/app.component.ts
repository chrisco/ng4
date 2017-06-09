import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNAe6ioXvmfty-7ynX8GMNrSxmjU0bfzc',
      authDomain: 'ng-recipe-book-b2cfe.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
