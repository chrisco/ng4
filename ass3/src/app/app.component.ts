import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pwd = 'tuna';

  checkPassword(e) {
    console.log(e.target);
  }
}
