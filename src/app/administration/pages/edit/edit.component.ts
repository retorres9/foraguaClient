import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';
import { Post } from '../../../interfaces/post.interface';
import { AppService } from '../../../app.service';
import ImageUploader from "quill-image-uploader";
var Image = Quill.import('formats/image');
Image.className = 'img-fluid';
Quill.register("modules/imageUploader", ImageUploader);
Quill.register(Image, true);

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent {
  editorInstance: any;
  constructor(private appService: AppService) { }

  modules = {
      imageUploader: {
        upload: (file) =>{
          return new Promise( (resolve, reject) => {
            const formData = new FormData();
            let result;
            formData.append('image', file);
            this.appService.postImages(formData).subscribe( resp =>{
              result = resp.data.url;
              console.log(result);
              resolve(result);
            });
            
            
          } );
        }
      }
  };


  post: Post = {
    title: '',
    body: '',
  };

  guardar() {
    console.log(this.post.body);
    // this.appService.createPost(this.post).subscribe( resp => {
    //   console.log(resp);
    // });
  }

}
