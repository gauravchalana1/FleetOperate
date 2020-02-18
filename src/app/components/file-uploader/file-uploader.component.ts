import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.css"]
})
export class FileUploaderComponent implements OnInit {
  private fileName;
  private files: Array<Object>;
  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, public http: HttpClient) {}

  ngOnInit() {}

  public onSubmit(): void {
    debugger;
    this.upload(this.fileName, this.formGroup.get("file").value);
  }

  public onFileChange(event) {
    debugger;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    }
  }

  public getFiles() {
    var url = 'https://api.dropboxapi.com/2/files/list_folder';
    var access_token = "sF1Dh0WGnSAAAAAAAAABPeJWy0T6vra9d_TPe0KmLNrdc5eY9DMJ4t6pzPN1dhNA";
    var dataString = '{"path": "/test","recursive": false,"include_media_info": false,"include_deleted": false,"include_has_explicit_shared_members": false,"include_mounted_folders": true,"include_non_downloadable_files": true}';
    var options = {
                headers:  {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
    };
    this.http.post(url, dataString, options).forEach((d) => {
      console.log(d);
    })
  }

  public upload(fileName: string, fileContent: string): void {
    debugger;
    var url = "https://content.dropboxapi.com/2/files/upload";
    const base64data = fileContent.replace(/^data:.*,/, "");
    var access_token =
      "sF1Dh0WGnSAAAAAAAAABPeJWy0T6vra9d_TPe0KmLNrdc5eY9DMJ4t6pzPN1dhNA";
    var options = {
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: "Bearer " + access_token,
        "Dropbox-API-Arg":
          '{"path": "/test/' +
          fileName +
          '","mode": "overwrite","autorename": true,"mute": false}'
      }
    };
    this.http.post(url, base64data, options).forEach(resp => {
      console.log("resp received");
    });
  }
}
