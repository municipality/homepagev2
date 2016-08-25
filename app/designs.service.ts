import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Injectable()

export class DesignsService {

    getProjects () {
        return [

                    {
                        title : "Scroll Art",
                        url : "http://scrollart.herokuapp.com",
                        image : 'images/scroll-art.png'
                    },
                    {
                        title : 'Photo Wall',
                        url : 'http://brians-photo-wall.herokuapp.com',
                        image : 'images/photo-wall.png'
                    },
                    {
                        title : 'About Brian Lee',
                        url : 'http://about-brian-lee.herokuapp.com',
                        image : 'images/about-brian-lee.png'
                    }
                ];
        // let url = `http://municipality.herokuapp.com/api/projects`;
        // return this.http.get(url)
        //        .map((response) => {
        //            if(response.status === 200) {
        //                return response.json();
        //            }
        //            else {
        //                throw new Error("No response from municipality.herokuapp.com");
        //            }
        //
        //        });
    }
}
