import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { IMedia } from '../models/imadia.model';

@Injectable()
export class MediaService {
  playList: Array<IMedia> = [
    {
        _id: 1,
        title: 'Pale Blue Dot',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        type: 'video/mp4',
        imageSrc : "./assets/images/banner-1.jpg",
        likeCouner : 0,
        unLikeCouner : 0,
        likeUsers : [],
        unLikeUsers : []

    },
    {
        _id: 2,
        title: 'Big Buck Bunny',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        type: 'video/mp4',
        imageSrc : "./assets/images/banner-2.jpg",
        likeCouner : 0,
        unLikeCouner : 0,
        likeUsers : [],
        unLikeUsers : []
    },
    {
        _id: 3,
        title: 'Elephants Dream',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4',
        imageSrc : "./assets/images/banner-3.jpg",
        likeCouner : 0,
        unLikeCouner : 0,
        likeUsers : [],
        unLikeUsers : []
    }
];
constructor(private http : HttpClient) {   
}


//httpGetMedia(): Observable<Array<IMedia>>{
  httpGetMedia():  Array<IMedia>{
    const requestUrl = 'http://11.0.73.2:3000/videos';
    //debugger;   
    //return this.http.get<Array<any>>(requestUrl);
   // return this.http.get<Array<IMedia>>(requestUrl);
    return this.playList;
}

httpGetSpecificItem(id : number): IMedia{
    //httpGetMedia(): Observable<Array<IMedia>>{
        const requestUrl = 'https://newsapi.org/v2/top-headlines?sources=ynet&apiKey=82f0da9784344916a6b506196467c87c';
        //return this.http.get<Array<IMedia>>(requestUrl);
        return this.playList.find(item=>item._id == id);
    }

httpUpdateSpecificItem(item : IMedia, id : number){
    //httpGetMedia(): Observable<Array<IMedia>>{
        const requestUrl = 'https://newsapi.org/v2/top-headlines?sources=ynet&apiKey=82f0da9784344916a6b506196467c87c';
        //return this.http.get<Array<IMedia>>(requestUrl);
        this.playList.find(item=>item._id == id) == item;
    }

}