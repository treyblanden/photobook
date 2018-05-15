import { Photo } from './photo.model';
import { User } from './user.model';

export class Album {

    photoList: Photo[];
    userId: any;
    id: any;

    constructor(photoList: Photo[], userId: String, id: any) {
        this.photoList = photoList;
        this.userId = userId;
        this.id = id;
    }
}