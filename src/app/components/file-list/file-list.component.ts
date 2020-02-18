import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  @Output() showDocuments = new EventEmitter<boolean>();
  @Input() companyName;
  public files: any;
  public testing: String
  constructor(public http: HttpClient) {
    this.testing = 'checking '

   }

  ngOnInit() {
    var url = 'https://api.dropboxapi.com/2/files/list_folder';
    var access_token = "sF1Dh0WGnSAAAAAAAAABQzILh82gU79v6HeLhsXhsOGxJaGBNgfYUmrc8oHntoFk";
    var pathToFolder = "/pa";
    var dataString = '{"path": "/test","recursive": false,"include_media_info": false,"include_deleted": false,"include_has_explicit_shared_members": false,"include_mounted_folders": true,"include_non_downloadable_files": true}';
    var options = {
                headers:  {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
    };
    this.http.post(url, dataString, options).forEach((resp) => { 
      this.files = resp;

    })
  }

  prevPage() {
    this.showDocuments.next(false);
  }

}
