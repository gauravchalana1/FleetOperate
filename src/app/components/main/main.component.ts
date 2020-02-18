import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  page: Number;
  companyName: String;
  showDocuments: Boolean;

  constructor() {
    this.page = 0;
    this.showDocuments = false;
  }

  nextPage(companyName) {
    this.page = 1;
    this.companyName = companyName;
  }

  nextPageDocuments(val) {
    this.showDocuments = val;
  }

  ngOnInit() {
  }
}
