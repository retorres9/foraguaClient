import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { AdministrationComponent } from './pages/administration/administration.component';

const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      {
        path: 'posts-list', component: PostsListComponent
      },
      {
        path: 'edit', component: EditComponent
      }
    ]
  },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule { }
