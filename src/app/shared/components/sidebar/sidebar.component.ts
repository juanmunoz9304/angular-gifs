import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor (private gifService : GifsService) {}

  get tagHistory():string[]{
    return this.gifService.tagsHistory
  }

  setSearch(tag: string) : void{
    this.gifService.searchTag(tag);
  }
}
