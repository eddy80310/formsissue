import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myForm: FormGroup;
  
  // Date TimePicker
  private dateValue = "1234"
  private showDatePicker: boolean;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      refNumber: [''],
      date: [''],
    });
  }

  onSubmit() {
    // console.log(formOutput.value);
    console.log(this.myForm.value);
  }

  // Date Picker
  toggleDatePicker(status: boolean): void {
    this.showDatePicker = status;
  }

  setDate(date: Object): void {
    // console.log(typeof(date.toString()));
    this.dateValue = date.toString();
  }
}
