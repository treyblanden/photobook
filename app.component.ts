import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { User } from './model/user.model';
import { Photo } from './model/photo.model';
import { Album } from './model/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app';
  usersResponse = [];
  albumsResponse = [];
  photosResponse = [];
  users: User[];
  albums: Album[];
  photos: Photo[];

  constructor(private http: Http) {

  }

  ngOnInit() {
    //adding promises to variable in case application needs promises to finish before executing further code. code would then
    //execute Promise.all() to make sure promises complete before proceeding
    let userPromise = this.http.get("jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(response => {
        this.usersResponse = response.json();
      });

    let albumPromise = this.http.get("jsonplaceholder.typicode.com/albums")
      .toPromise()
      .then(response => {
        this.albumsResponse = response.json();
      });

    let photoPromise = this.http.get("jsonplaceholder.typicode.com/photos")
      .toPromise()
      .then(response => {
        this.photosResponse = response.json();
      });
    
    let promises = [userPromise, albumPromise, photoPromise];

    //map photos to photo list
    this.photosResponse.forEach(element => {
      let photo = new Photo(element.albumId, element.id, element.url, element.title);
      this.photos.push(photo); 
    })

    //map photos to albums and create album list
    this.albumsResponse.forEach(element => {
      let album = new Album(element.id, element.name, element.userName);
      this.photos.forEach(element => {
        //would check to see if album id and photo's album id match and add to album photo list
      });
      
      this.albums.push(album);
    })

    //map albums to users and create userList
    this.usersResponse.forEach(element => {


      let user = new User(element.id, element.name, element.userName);
      this.users.push(user); 
    })
  }
}
