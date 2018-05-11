import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, } from './app.component';
import { AlbumService } from './services/album.service';
import { AlbumComponent } from './components/album.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './components/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AlbumService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
