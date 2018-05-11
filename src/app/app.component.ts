import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';

import { groupBy } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  albums: any;

  constructor(private service: AlbumService) {
  }

  ngOnInit() {
    this.service.load().subscribe((photos: any[]) => {
      const albums = groupBy(photos, 'albumId');
      this.albums = Object.keys(albums).map(album => {
        return {
          albumId: album,
          data: albums[album],
        };
      })
      .sort((a, b) => parseInt(b.albumId, 10) - parseInt(a.albumId, 10))
      .slice(0, 3);
      console.log(this.albums);
    });
  }

}
