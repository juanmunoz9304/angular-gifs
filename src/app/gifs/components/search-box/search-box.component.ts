import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('searchTagInput')
  public inputTag! : ElementRef<HTMLInputElement>

  searchTag(){
    const tag = (this.inputTag.nativeElement.value);
    this.gifsService.searchTag(tag);
    this.inputTag.nativeElement.value = '';
  }
}
