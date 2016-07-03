import {Component} from 'angular2/core';

interface Artist {
    name: string;
    shortname: string;
    known: string;
    bio: string;
    imageUrl: string;
}
@Component({
    selector: 'artist-details',
    templateUrl: 'partials/artistdetails.html',
    inputs: ['artist'],
    styleUrls: ['css/app-details.css']
})

export class ArtistDetailsComponent {

}
