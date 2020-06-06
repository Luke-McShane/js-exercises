let zepAlbums = [
	'Led Zeppelin I',
	'Led Zeppelin II',
	'Led Zeppelin III',
	'Led Zeppelin IV',
	'Presence',
	'In Through The Out Door',
	'Coda'
];

// Accessing individual items of an array, and changing those items
console.log(`First Led Zeppelin album: ${zepAlbums[0]}`);
zepAlbums[0] = 'Led Zeppelin 1';
console.log(`First Led Zeppelin album: ${zepAlbums[0]}`);
zepAlbums[0] = 'Led Zeppelin I';

// Removing and adding elements to the end of an array
zepAlbums.pop();
console.log(zepAlbums);

zepAlbums.push('Coda');
console.log(zepAlbums);

// Removing and adding elements to the beginning of an array
zepAlbums.shift();
console.log(zepAlbums);

zepAlbums.unshift('Led Zeppelin I');
console.log(zepAlbums);

// We can also capture whatever we pop/shift from the array because when we perform either of
// these methods they return the item they remove

let toDo = [ 'Bake bread', 'Run a mile' ];

// let taskComplete = toDo.pop();
let taskComplete = toDo.shift();
console.log(`Well done! You have just completed the "${taskComplete}" activity!`);
