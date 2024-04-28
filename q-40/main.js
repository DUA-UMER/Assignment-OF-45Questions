function makeAlbum(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("dua", "albumTitle 1");
var album2 = makeAlbum("umer", "albumTitle 2");
var album3 = makeAlbum("maham", " albumTitle 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
