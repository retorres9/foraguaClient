import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';
import { Post } from '../../../interfaces/post.interface';
import { AppService } from '../../../app.service';
import ImageUploader from 'quill-image-uploader';
import { ImageSnippet } from './ImageSnippet';
const Image = Quill.import('formats/image');
Image.className = 'img-fluid';
Quill.register('modules/imageUploader', ImageUploader);
Quill.register(Image, true);

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent {
  editorInstance: any;
  isError: boolean = false;
  mensaje: string;
  selectedFile: ImageSnippet;
  url: string;
  isUploading: boolean = false;
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
              resolve(result);
            });
          } );
        }
      }
  };


  post: Post = {
    title: '',
    img: '',
    body: ''
  };

  guardar() {
    if (!this.post.title.trim() || !this.post.body.trim() || !this.post.img) {
      this.mensaje = 'Todos los campos son obligatorios';
      this.mostrarMensaje();
    }
    this.appService.createPost(this.post).subscribe( resp => {
      console.log(resp);
    });
  }

  mostrarMensaje() {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 5000);
  }

  processImage(fileInput: any) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    this.isUploading = true;
    reader.onload = (event: any) => {
      console.log('here');
      this.selectedFile = new ImageSnippet(event.target.result, file);
      const formData = new FormData()
      formData.append('image', file);
      this.appService.postImages(formData).subscribe( (resp) => {
        console.log(resp);
        
        this.post.img = resp.data.url;
        console.log(this.post.img);
        
        this.isUploading = false;
      });
    };
    reader.readAsDataURL(file);
  }

}
