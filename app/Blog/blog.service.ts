import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx'; // to use map function

@Injectable()
export class BlogService {

    constructor (public http: Http) {

    }
    getEntries () {
        // return [
        //     {
        //         date : '24 June, 2016',
        //         subject : "Building This",
        //         entry : ""
        //     }
        // ];
        let url = `http://blee.herokuapp.com/api/blogentries`;

        return this.http.get(url)
               .map((response) => {
                   if(response.status === 200) {
                       return response.json();
                   }
                   else {
                       throw new Error("Error");
                   }

               });

    }
}
