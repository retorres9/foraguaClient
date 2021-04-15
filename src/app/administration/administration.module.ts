import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './pages/edit/edit.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';



@NgModule({
  declarations: [
    EditComponent,
    PostsListComponent,
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule,
    QuillModule
  ]
})
export class AdministrationModule { }
