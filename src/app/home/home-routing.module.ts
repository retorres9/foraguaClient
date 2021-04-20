import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post/:id', component: PostsComponent
  }
]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
