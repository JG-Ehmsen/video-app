import { Component } from '@angular/core';
import {Video} from './videos/shared/video.model';
import {VideoService} from './videos/shared/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  videos: Video[];

  constructor(private videoService: VideoService)
  {
    videoService.getVideos().subscribe(videos => {this.videos = videos; });
  }
}
