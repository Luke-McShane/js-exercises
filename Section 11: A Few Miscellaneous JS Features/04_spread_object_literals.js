// We can also use the spread syntax to copy objects other objects.
// We cannot spread an object into an array or a function - we can only spread an object into another object
// We can, however, spread an object into an object nested within an array, as such: [{...myObj}] <-- this works,
// for we are spreading into an object

const dad = {
	name: 'Roger',
	age: 46,
	favouriteFoods: [ 'Pizza', 'Burger' ]
};

const mum = {
	name: 'Charlotte',
	age: 39,
	favouriteFoods: [ 'Grek Salad', 'Easter Egg' ]
};

const brother = {
	name: 'Timothy',
	age: 11,
	favouriteFoods: [ 'Ham Sandwich', 'Omelette' ]
};

const sister = {
	name: 'Mary',
	age: 14,
	favouriteFoods: [ 'Gateaux', 'Tortillas' ]
};

// If we declare this as such, then the sister properties will overwrite the brother properties, and it will
// appear as if we only copied over the sister proerties
// const siblings = {...brother, ...sister};
// const parents = { ...dad, ...mum };
// const family = { ...dad, ...mum, ...brother, ...sister };

// Thus we must spread as below, so there is no overwriting and we have two properties for siblings, each containing the
// corresponding sibling objects
const siblings = { brother: { ...brother }, sister: { ...sister } };
const parents = { dad: { ...dad }, mum: { ...mum } };
const family = { dad: { ...dad }, mum: { ...mum }, brother: { ...brother }, sister: { ...sister } };
console.log(siblings);
console.log(parents);
console.log(family);
