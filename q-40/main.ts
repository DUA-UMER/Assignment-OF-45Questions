function makeAlbum(artistName : string, albumTitle : string, tracks?: number){
     let album: {artist: string, title: string, tracks?: number} = {
       artist: artistName,
       title: albumTitle,
      };
if (tracks !== undefined){
   album.tracks = tracks;
}

  return album;

}

let album1 = makeAlbum("dua", "albumTitle 1");
let album2 = makeAlbum("umer", "albumTitle 2");
let album3 = makeAlbum("maham", " albumTitle 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);


