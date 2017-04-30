import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    console.log('Loading servers...');
    setTimeout(() => {
      this.router.navigate(['/servers']);
      console.log('Servers loaded.');
    }, 1000);
  }

}
