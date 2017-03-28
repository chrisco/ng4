import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="alert alert-warning">
      Warning!
    </div>
  `,
  styles: [`
    .alert-warning {
      color: red;
    }
  `]
})
export class WarningAlertComponent { }
