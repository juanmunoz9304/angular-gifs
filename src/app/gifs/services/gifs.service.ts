import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, ISearchResponse } from '../interfaces/gifs.interfaces';

const APIKEY: string = 'i5G1V5rCI8MqtSveLC8J0K4Kd0erf4b3';
@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _tagsHistory: string[] = [];
  public gifList : Gif[] = [];
  private serviceURL = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) { 
    this.getLocalStorage();
  }

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private sortHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage() : void {
    if(localStorage.getItem('history')){
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
      this._tagsHistory.length > 0 && this.searchTag(this._tagsHistory[0]);
    }
  }

  public searchTag(tag: string): void {
    if (tag) {
      this.sortHistory(tag);

      const params = new HttpParams()
      .set('api_key', APIKEY)
      .set('limit', '10')
      .set('q', tag)
  
      this.http.get<ISearchResponse>(`${this.serviceURL}/search`, {params})
        .subscribe(res => {
          this.gifList = res.data;          
        });
    }

  }



}
