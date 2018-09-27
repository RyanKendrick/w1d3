var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {
  var list = "";
  for (var key in library.playlists) {
    console.log(list + key + " " + library.playlists[key]["name"] + " - " + library.playlists[key]["tracks"].length + " tracks");
    }
  return list;
}
printPlaylists(library);



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {
  var trackList = "";
  for (var tracksKey in library.tracks) {
    console.log(trackList + tracksKey + " " + library.tracks[tracksKey]["name"] + " " + "by " + library.tracks[tracksKey]["artist"] + " " + "(" + library.tracks[tracksKey]["album"] + ")")
  }
  return trackList;
}
printTracks(library);


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  printPlaylistString(playlistId);
  for (var track of library.playlists[playlistId].tracks){ //use of bc here is in an array not object
    console.log(track + ': ' + library.tracks[track]["name"] + ' by ' + library.tracks[track]["artist"] + ' (' + library.tracks[track]["album"] + ')');

  }
};
printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
library.playlists[playlistId].tracks.push(trackId);
};
// addTrackToPlaylist('t01', 'p02');
// console.log(library.playlists.p02);


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
//console.log(uid());

// adds a track to the library

var addTrack = function (name, artist, album) {
  var idvalue = uid();
  library.tracks[idvalue]={
    'id':idvalue,
    'name':name,
    artist:artist,
    album:album

  };
};
//addTrack('a','b','c');
//console.log(library.tracks);


// adds a playlist to the library

var addPlaylist = function (name) {
  var idvalue = uid();
  library.playlists[idvalue]={
    id : idvalue,
    name:name
  };
};
addPlaylist('BTS');
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var result = [];
  for (var track in library.tracks){
    trackKeys = Object.keys(library.tracks[track]);

    for(var item of trackKeys){
      if(library.tracks[track][item].search(query)!== -1) {
        if(result.indexOf(track) > -1) {
        } else {
          result.push(track);
        }
      }
    }

  }

  return(result);
};
console.log(printSearchResults('Jonathon'));
