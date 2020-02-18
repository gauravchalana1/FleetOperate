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
  public authors: Array<any>
  constructor(public http: HttpClient) {
    this.testing = 'checking';
    this.authors = [];

   }
  async getListOfAuthors() {
    debugger;
    for (var file of this.files) {
      var author = await this.getAuthor(file.id);
      console.log(author);
      this.authors.push(author.users[0].user.display_name);
    }
    this.files.map((file,ind) => {
      this.files[ind].owner = this.authors[ind];
    })
    console.log('checking files upd here', this.files);
   }

   async getAuthor(id): Promise<any> {
    var url = "https://api.dropboxapi.com/2/sharing/list_file_members";
    var access_token = "sF1Dh0WGnSAAAAAAAAABSI5Wl1p3GVfhhBDYbLXxIzoFk0VaFXxho-Tfc6CBxbnV";
    var dataString = "{\"file\": \""+id+"\",\"include_inherited\": true,\"limit\": 100}";
    var options = {
                headers:  {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
    };
    return new Promise((res,rej) => {
      this.http.post(url, dataString, options).forEach((resp: any) => { 
        res(resp);
      })
  
    })

   }

  ngOnInit() {

    var url = 'https://api.dropboxapi.com/2/files/list_folder';
    var access_token = "sF1Dh0WGnSAAAAAAAAABSI5Wl1p3GVfhhBDYbLXxIzoFk0VaFXxho-Tfc6CBxbnV";
    var pathToFolder = "/"+this.companyName;
    var dataString = "{\"path\": \""+pathToFolder+"\",\"recursive\": false,\"include_media_info\": false,\"include_deleted\": false,\"include_has_explicit_shared_members\": false,\"include_mounted_folders\": true,\"include_non_downloadable_files\": true}";
    var options = {
                headers:  {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
    };
    this.http.post(url, dataString, options).forEach((resp: any) => { 
      console.log(resp);
      if ("entries" in resp) {

      this.files = resp.entries;
      this.getListOfAuthors();

      }

    })
  }

  prevPage() {
    this.showDocuments.next(false);
  }

}
