import {Component} from 'angular2/core';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {Artist} from "./Artist";
import {SearchPipe} from "./searchPipe";

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    directives: [ArtistItemComponent, ArtistDetailsComponent],
    styleUrls: ['css/app.css'],
    pipes: [SearchPipe]
})

export class AppComponent {
    artists = ARTISTS;
    currentArtist: Artist;

    showArtist(item: Artist) {
        this.currentArtist = item;
    }

}

var ARTISTS: Artist[] = [
    {
        name: 'Abbas al-Noury',
        shortname: 'AN',
        reknown: 'Abu kasem',
        bio: 'Abbas al-Noury (Arabic: عباس النوري‎‎; born 8 December 1952 in Damascus, Syria) is a Syrian television actor, known for his role in the Syrian series Bab al-Hara 1 and 2, and for being the leading Syrian actor of "Al Ijtiah" (The Invasion) TV series about the atrocities in Jenin camp in Palestine, this series was the first Arabic TV production to win the [1]] (Emmy’s new telenovela category for the best international drama series) in 2008.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Abbas_Al_Noory.jpg/220px-Abbas_Al_Noory.jpg'
    },
    {
        name: 'Baseem Yakhour',
        shortname: 'PY',
        reknown: 'Abu Gaaud',
        bio: `Baseem Yakhour graduated from Higher Institute of Dramatic Art in 1993 and joined the Syrian actor's syndicate on February 16, 1999. Since 1993, Yakhour has acted in many television series, stage productions and theater. He was also a television presenter for a short time for a show called "Charisma".`,
        imageUrl: 'https://i.ytimg.com/vi/HyY1WmAgZMA/hqdefault.jpg'
    }
]
