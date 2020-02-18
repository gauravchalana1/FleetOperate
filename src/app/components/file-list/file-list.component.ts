import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  public files: any;
  public testing: String
  constructor(public http: HttpClient) {
    this.testing = 'checking '

   }

  ngOnInit() {
    var url = 'https://api.dropboxapi.com/2/files/list_folder';
    var access_token = "sF1Dh0WGnSAAAAAAAAABPeJWy0T6vra9d_TPe0KmLNrdc5eY9DMJ4t6pzPN1dhNA";
    var dataString = '{"path": "/test","recursive": false,"include_media_info": false,"include_deleted": false,"include_has_explicit_shared_members": false,"include_mounted_folders": true,"include_non_downloadable_files": true}';
    var options = {
                headers:  {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
    };
    this.http.post(url, dataString, options).forEach((resp) => {
      console.log(resp.entries);
      this.files = resp.entries;

    })
  }

}
