import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()

export class AdventureService {
    constructor (private http:Http) {

    }

    getPhotos(album) {
        let params = new URLSearchParams();
        params.set('album', album);
        let url = document.location.origin + `/api/adventurephotos`;
        return this.http.get(url, {
                    search: params
                }).map((response) => {
                   if(response.status === 200) {
                       return response.json();
                   }
                   else {
                       throw new Error("No response from municipality.herokuapp.com");
                   }

               });
    }
}
