import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Output, EventEmitter } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { access_token } from '../../constants.js';

@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.css"]
})
export class FileUploaderComponent implements OnInit {
  @Output() showDocuments = new EventEmitter<boolean>();
  @Input() companyName;
  private fileName;
  private files: Array<Object>;
  private showFidgetSpinner: Boolean;
  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
    this.showFidgetSpinner = true;
  }

  ngOnInit() {}

  public onSubmit(): void {
    this.upload(this.fileName, this.formGroup.get("file").value);
  }

  public onFileChange(event) {
    this.showFidgetSpinner = true;
    this.spinner.show();
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        this.onSubmit();
      };
    }
  }

  public enableDocuments() {
    this.showDocuments.next(true);
  }

  public upload(fileName: string, fileContent: string): void {
    var url = "https://content.dropboxapi.com/2/files/upload";
    var pathToFolder = `/${this.companyName}/${this.fileName}`;
    const base64data = fileContent.replace(/^data:.*,/, "");
    var options = {
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: "Bearer " + access_token,
        "Dropbox-API-Arg":
          '{"path": "' +
          pathToFolder +
          '","mode": "overwrite","autorename": true,"mute": false}'
      }
    };
    this.http.post(url, base64data, options).forEach(resp => {
      console.log("resp received");
      this.showFidgetSpinner = false;
      this.spinner.hide();
    });
  }
}
