import {Album} from './album.model'

export class User {

    id: String;
    name: String;
    userName: String;

    constructor(id: String, name: String, userName: String) {
        this.id = id;
        this.name = name;
        this.userName = userName;
    }
}