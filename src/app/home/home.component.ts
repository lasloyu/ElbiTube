import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { IMedia } from '../models/imadia.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../css/bootstrap.mincbed.css',
    '../css/font-awesome.mincbed.css',
    '../css/googleCss.css',
    '../css/megamenucbed.css',
    '../css/owl.carouselcbed.css',
    '../css/pgwslider.mincbed.css',
    '../css/style.mincbed.css'
  ]
})
export class HomeComponent implements OnInit {
  playList: Array<IMedia>;
  currentIndex: number;
  currentItem: IMedia;
  constructor(private mediaService: MediaService, private http: HttpClient) {
  }

  onVideoEnded() {
    debugger;
    this.currentIndex++;
    if (this.currentIndex === this.playList.length) {
      this.currentIndex = 0;
    }
    this.currentItem = this.playList[this.currentIndex];
  }
  ngOnInit() {
    /*this.playList = this.mediaService.httpGetMedia();
    this.currentIndex = 0;
    this.currentItem = this.playList[ this.currentIndex];*/
    this.mediaService.httpGetMedia().subscribe(data => { 
      debugger;
      console.log(data);
       this.playList = data.filter(item => item.likeCouner > 0);
       this.currentIndex = 0;
       this.currentItem = this.playList[ this.currentIndex ];
      });
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    debugger;
    this.currentIndex = index;
    this.currentItem = item;
  }

}
