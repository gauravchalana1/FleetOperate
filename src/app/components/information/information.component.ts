import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  companyName: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @Output() nextPagePress = new EventEmitter<string>();
  matcher = new MyErrorStateMatcher();

  constructor() {
    this.companyName = '';
  }

  ngOnInit() {
   
  }

  setCompanyName(evt) {
    this.companyName = evt.target.value;
  }

  nextPageBtn(evt) {
    this.nextPagePress.next(this.companyName);
  }
  

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}