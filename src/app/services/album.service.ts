import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AlbumService {

    url = 'https://jsonplaceholder.typicode.com/photos';

    constructor(
        private http: HttpClient
    ) { }

    private options() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        });
        return { headers };
    }

    load(): Observable<any> {
        return this.http.get(this.url);
    }
}
