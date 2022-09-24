/* === Declare maps  === */
const newMaps = new Map([
    ['apple', 200],
    ['banana', 400],
    ['orange', 800]
]);

// output Maps data; 
console.log(newMaps);


/* === set() method add empty Maps data. and change Maps key values. === */
const newMaps2 = new Map();

// set map value;
newMaps2.set('apple', 1000); // key is apple;
newMaps2.set(200, 'apple');  // kye is 200;

// change maps key value; 
newMaps2.set('apple', 0); // change key value;

// check output; 
console.log(newMaps2);


/* === get() Maps data === */
const newMaps3 = new Map([
    ['apple', 200],
    ['banana', 400],
    ['orange', 800]
]);

// output get data;
console.log(newMaps3.get('banana')); //return 400. This is banana key value;


/* === delete() Maps data === */
const newMaps4 = new Map([
    ['apple', 2100],
    ['banana', 1400],
    ['orange', 1800]
]);

// delete maps data
newMaps4.delete('orange');

// check output;
console.log(newMaps4); // check output newMaps4 data;


/* === clear() Maps data === */
const newMaps5 = new Map([
    ['amul', 2100],
    ['jamul', 1400],
    ['ramul', 1800]
]);

// clear newMaps5 maps data;
newMaps5.clear();

// check output;
console.log(newMaps5); // return empty maps.


/* === has() method returns true if a key exists in a Map === */
const newMaps6 = new Map([
    ['nomna', 484084],
    ['hasnat', 484090],
    ['mehedi', 484069],
    ['jinnay', 484070]
])

// check maps data;
console.log(newMaps6.has('mehedi'));   // return true;
console.log(newMaps6.has('abdul'));   // return false;

