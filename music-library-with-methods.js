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
  var printPlaylists = function (library) {
  var list = "";
  for (var key in this.playlists) {
    console.log(list + key + " " + this.playlists[key]["name"] + " - " + this.playlists[key]["tracks"].length + " tracks");
    }
  return list;
}

  var printTracks = function (library) {
  var trackList = "";
  for (var tracksKey in this.tracks) {
    console.log(trackList + tracksKey + " " + this.tracks[tracksKey]["name"] + " " + "by " + this.tracks[tracksKey]["artist"] + " " + "(" + this.tracks[tracksKey]["album"] + ")")
  }
  return trackList;
}

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


library.printPlaylists();



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


library.printTracks();


