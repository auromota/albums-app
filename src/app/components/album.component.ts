import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent {

    @Input()
    album: any;

    constructor(
        private service: AlbumService,
    ) {

    }
}
