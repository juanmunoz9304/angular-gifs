import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gif-list',
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  @Input()
  public gifs : Gif[] = [];
}
