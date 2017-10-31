import { Injectable } from '@angular/core';
import {Video} from './video.model';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  getVideos(): Observable<Video[]>
  {
    return this.http.get('http://jgevideoapp.azurewebsites.net/api/videos').map(resp => resp.json() as Video[]);
  }
}
