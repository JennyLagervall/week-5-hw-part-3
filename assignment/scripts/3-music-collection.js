console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  let favAlbums ={
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
collection.push(favAlbums);
return favAlbums;
}

console.log(addToCollection(myCollection, 'The Dark Side of the Moon', 'Pink Floyd', 1973))
console.log(addToCollection(myCollection, 'Blood on the Tracks', 'Bob Dylan', 1975))
console.log(addToCollection(myCollection, 'A Night at the Opera', 'Queen', 1975))
console.log(addToCollection(myCollection,'unheard', 'Hozier', 2024))
console.log(addToCollection(myCollection, 'Notorious','The Notorious B.I.G.', 2009))
console.log(addToCollection(myCollection, ' B-sides and rarities', 'Pearl Jam', 2003))

// end first part

function showCollection(collection){
 for(let i = 0; i < collection.length; i++) {
let album = collection[i];
let output = `One of my favorite albums is '${album.title}' by '${album.artist}', which was published in '${album.yearPublished}'.`;
console.log(output);  
 }
}
showCollection(myCollection);

// end part two

function findByArtist(collection, artist){
  let matchingResults = [];
  for(let i = 0; i < collection.length; i++) {
    let album = collection[i];
    if(album.artist === artist){
      matchingResults.push(album);
   
}
  }
  return matchingResults;
}
console.log('should show bob dylan album', findByArtist(myCollection, 'Bob Dylan'));
console.log('should return empty', findByArtist(myCollection, 'The Doors'));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
