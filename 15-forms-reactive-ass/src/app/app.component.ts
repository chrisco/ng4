import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  // projectStatusOptions = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName,
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical'),
    });
  }

  onSaveProject() {
    console.log(this.signupForm);
  }
}
