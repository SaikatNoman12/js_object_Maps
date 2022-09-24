/* === Declare Maps  === */
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


/* === get() method get Maps data === */
const newMaps3 = new Map([
    ['apple', 200],
    ['banana', 400],
    ['orange', 800]
]);

// output get data;
console.log(newMaps3.get('banana')); //return 400. This is banana key value;


/* === delete() method delete specific Maps data === */
const newMaps4 = new Map([
    ['apple', 2100],
    ['banana', 1400],
    ['orange', 1800]
]);

// delete maps data
newMaps4.delete('orange');

// check output;
console.log(newMaps4); // check output newMaps4 data;


/* === clear() method clear Maps all data === */
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


/* === Map forEach(). This is return two values 'key', 'values' === */
const newMaps7 = new Map([
    ['apple', 5000],
    ['halim', 2000],
    ['karim', 8000]
]);

// forEach() method use for looping;
newMaps7.forEach(function (value, key) {
    console.log(key, value);
});

/* === keys() method only return all keys. And return iterator array. === */
const newMaps8 = new Map([
    ['hello', 'gello'],
    ['mair', 'khailo'],
    ['gili', 'felo']
]);

// apply keys() method;
console.log(newMaps8.keys()); // return all keys are iterator;


/* === values() method only return all key values. And return iterator array. === */
const newMaps9 = new Map([
    ['hello', 'gello'],
    ['mair', 'khailo'],
    ['gili', 'felo']
]);

// apply values() method;
console.log(newMaps9.values());


/* === entries() method return array property and value. property and value store a array === */
const newMaps10 = new Map([
    ['ailam', 'gela'],
    ['marlam', 'morlam'],
    ['fakibaji', 'korlo']
]);

// apply entries() method
console.log(newMaps10.entries());


/* === check Map data type === */
const newMaps11 = new Map();

console.log(newMaps11 instanceof Map);  // return true;


/* === get object data type key; === */
const newMaps12 = new Map();

// declare object;
const apple = { name: 'apple' };
const banana = { name: 'banana' };

// set object type data;
newMaps12.set(apple, 200);
newMaps12.set(banana, 500);

// get object data type data. ;
const getData = newMaps12.get(apple);

// check output;
console.log(getData);  // return 200

