// Computed object properties are used when we want the value of some variable to be the name of the key for an object

const role = 'Host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'Stanley Kubrick';

// So, without computed properties, we would do the following
// He we are initializing an object, then computing the key names and setting their value to the corresponding variables
// const team = {};
// team[role] = person;
// team[role2] = person2;

// With computed properties, we can do the following
const team = { [role]: person, [role2]: person2 };
console.log(team);

// This is how we would add a new key-value pair to an object without computed properties
function addProp(obj, key, val) {
	newObj = { ...obj };
	newObj[key] = val;
	return newObj;
}

// This is how we can add a key-value pair to an object with computed properties
const addPropComp = (obj, k, v) => {
	return { ...obj, [k]: v };
};
// We can do it on one line, but we must parenthesize the statement so the compiler knows that we're implicitly returning, not
// going into a block
// const addPropComp = (obj, k, v) => ({...obj, [k]:v});

const updatedTeam = addProp(team, 'Writer', 'Stephen King');
