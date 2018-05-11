import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent {

    @Input()
    get album(): any {
        return this._album;
    }
    set album(album: any) {
        this._album = album;
        this.photos = album.data
            .sort((a, b) => b.id - a.id)
            .slice(0, 2);
    }
    _album: any;

    photos: any;

    constructor(
        private service: AlbumService,
    ) {

    }
}
