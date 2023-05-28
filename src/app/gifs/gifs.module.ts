import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifListComponent } from './components/gif-list/gif-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifListComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HomePageComponent
  ]
})
export class GifsModule { }
