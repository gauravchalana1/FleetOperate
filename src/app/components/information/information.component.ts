import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective,FormBuilder, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  companyName: string;
  infoForm: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @Output() nextPagePress = new EventEmitter<string>();
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {
    this.companyName = '';
  }

  formBuild() {
    this.infoForm = this.fb.group({
      company: ['', [Validators.required]],
      email: this.emailFormControl
    });
  }

  ngOnInit() {
    this.formBuild();
   
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