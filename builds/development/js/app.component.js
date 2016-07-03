System.register(['angular2/core', './artist-item.component', './artist-details.component', "./searchPipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, artist_item_component_1, artist_details_component_1, searchPipe_1;
    var AppComponent, ARTISTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_item_component_1_1) {
                artist_item_component_1 = artist_item_component_1_1;
            },
            function (artist_details_component_1_1) {
                artist_details_component_1 = artist_details_component_1_1;
            },
            function (searchPipe_1_1) {
                searchPipe_1 = searchPipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.artists = ARTISTS;
                }
                AppComponent.prototype.showArtist = function (item) {
                    this.currentArtist = item;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'partials/app.html',
                        directives: [artist_item_component_1.ArtistItemComponent, artist_details_component_1.ArtistDetailsComponent],
                        styleUrls: ['css/app.css'],
                        pipes: [searchPipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ARTISTS = [
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
                    bio: "Baseem Yakhour graduated from Higher Institute of Dramatic Art in 1993 and joined the Syrian actor's syndicate on February 16, 1999. Since 1993, Yakhour has acted in many television series, stage productions and theater. He was also a television presenter for a short time for a show called \"Charisma\".",
                    imageUrl: 'https://i.ytimg.com/vi/HyY1WmAgZMA/hqdefault.jpg'
                }
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map
