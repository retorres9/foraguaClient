import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MomentjsPipe } from '../pipes/momentjs.pipe';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    HomeComponent,
    MomentjsPipe,
    PostsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
