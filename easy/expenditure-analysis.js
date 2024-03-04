
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var listOfObjects = [];
  var myMap = new Map();
  
  for (var i = 0; i < transactions.length; i++) {
    var currentObject = transactions[i];

    // Accessing properties of the current object
    var type = currentObject['category'];
    var value = currentObject['price'];

    if(myMap.has(type)){
      myMap.set(type, myMap.get(type)+value);
    }else{
      myMap.set(type,value);
    }
  }

  for (let [key, value] of myMap) {
    var singleObj = {};
    singleObj['category'] = key;
    singleObj['totalSpent'] = value;
    listOfObjects.push(singleObj);
  }

  
  return listOfObjects;
}

module.exports = calculateTotalSpentByCategory;