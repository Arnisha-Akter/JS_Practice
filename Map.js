// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let result = fruits.get("apples");
  console.log(fruits);
  fruits.delete("oranges");
  console.log(fruits);


// For the entries() method returns an iterator object with the [key, values] in a Map
  // Create a Map
const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  for (const x of fruits2.entries()) {
    text += x + "\n";
  }
  
  let result2 = fruits2.get("apples");
  console.log("with key and values \n"+text);