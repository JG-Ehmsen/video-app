import {Genre} from '../../genres/shared/genre.model';

export class Video
{
  id?: number;
  title: string;
  author: string;
  genres: Genre[];
}
