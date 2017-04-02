import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  items = [];

  onToggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.items.push({
      len: this.items.length,
      stamp: new Date().getTime()
    });
  }
}
