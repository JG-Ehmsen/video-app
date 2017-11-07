import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService)
  {

  }

  ngOnInit() {
    this.videoService.get().subscribe(videos => {this.videos = videos; });
  }

  details(video: Video)
  {
    console.log('clicked ' + video.id);
  }
}
