export class Photo {

    albumId: any;
    id: any;
    url: String;
    title: String;

    constructor(albumId: any, id: any, url: String, title: String) {
        this.albumId = albumId;
        this.id = id;
        this.url = url;
        this.title = title;
    }

}