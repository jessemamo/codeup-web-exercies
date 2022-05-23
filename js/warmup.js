(function() {
//================================= WARM UP

//Create a file called js-warm-ups.html and add script tags to write JavaScript code.

//    Write a function, returnFirstAndLast, that takes in an array of values and returns an array of just the first and last elements. Assume the input array contains at least two elements. The function should not mutate the input array.

//    Examples...
//
//function returnFirstAndLast(){
   // var outputArr = [];
   /// var firstElement

//returnFirstAndLast([1, 2, 3, 4]) // returns [1, 4]
///returnFirstAndLast(['hello', 'bob', 7, null, 'world']) // returns ['hello', 'world']
//returnFirstAndLast(['hello', 'world']) // returns ['hello', 'world']


//Write a function, returnEveryOtherElement, that takes in an array of inputs and returns an array of every other input, starting with the first. Assume the array will contain at least three elements. The function should not mutate the input array.

 //Examples...
    //function returnEveryOtherElement(array){
//var outputArray = [];
//for(var i = 0; i < array.length; i+= 1){
    //if (i % 2 === 0){
        //continue;
       // outputArray.push(array[i]);
 //   }


//return outputArray;


//returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]
    //returnEveryOtherElement([1, 2, 3]) // returns [1, 3]
//returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']
//returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]


//var trails = [
 //   {
        //name: "Salado Creek Greenway",
      //  distanceInMiles: 20,
       // isPaved: true
  //  },
   // {
       // name: "Leon Creek Greenway",
       //// distanceInMiles: 20.1,
      ///  isPaved: true
    //},
    //{
        //name: "McAllister Park: Blue Loop",
      //  distanceInMiles: 6.3,
       // isPaved: false
    //},
    //{
       // name: "Phil Hardberger Park: Geology Trail",
       // distanceInMiles: 0.8,
       // isPaved: false
    //}
//];

//function (output){
    //return trails.isPaved.number = true


/////}
//}});
 //

//function alaphebet(str){
   // return str.split("").sort().join("")

//}
//console.log(alaphebet(aasdvfadfg))
//================================= WARM UP


//Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:

//{

   // lowest: LOWEST_NUMBER_HERE,
       // highest: HIGHEST_NUMBER_HERE
//}

//Assume both inputs are number data types. The first argument may or may not be higher than the second argument. If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.


   // EXAMPLES...


//createNumObject(1, 3) // returns...

/*
  {
    lowest: 1,
    highest: 3
  }
*/

//createNumObject(10, 5) // returns...

/*
  {
    lowest: 5,
    highest: 10
  }
*/

//createNumObject(7, 7) // returns...

/*
  {
    lowest: 7,
    highest: 7*/


//
 //   ================================= WARM UP

    //Consider an array of product objects:
   //
   //      let products = [
   //          {
   //              name: 'Hammer',
   //              priceInCents: 4500,
   //              isInStock: true
   //          },
   //          {
   //              name: 'Computer',
   //              priceInCents: 45000,
   //              isInStock: true
   //          },
   //          {
   //              name: 'Water Bottle',
   //              priceInCents: 3300,
   //              isInStock: true
   //          },
   //          {
   //  //             name: 'Car',
    //             priceInCents: 990000,
    //             isInStock: true
    //         },
    //         {
    //             name: 'Cup',
    //             priceInCents: 230,
    //             isInStock: false
    //         },
    //         {
    //             name: 'Book',
    //             priceInCents: 540,
    //             isInStock: false
    //         },
    //     ];
    // function priceLookup(items, name) {
    //     let ret = items.find( x => x.itemName === name);
    //     return ret ? ret.price : "is the most expensive item";
    // }
    // let maxProducts = products.reduce((max, min) => max.priceInCents > min.priceInCents);
    //    conole.log(products)
    //    console.log(maxProducts)

   // Create the following functions that take in an array of product objects and return various values:
   //
   //      returnMostExpensiveProductObjectInStock(products)
   //  returnLeastExpensiveProductObjectInStock(products)
   //  returnAveragePriceOfAllProductsInStock(products)
   //  returnProductObjectsNotInStock(products)
   //  Write a function that accepts an array of numbers and returns the average.
   //
   //      Test inputs:
   //      [3, 5, 7, 10, 0]
   //          [0, 3, 5, 6, 21]
// function average(arr){
//     const arr = [1, 2, 3, 4, 5];
//     const average = arr.reduce((a, b) => a + b, 0) / arr.length;const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// }
// }
// console.log(average);
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];
function calculatetotalStudents(arrayOfObjects){
    var totalStudents = 0;
for(var i = 0; i < class.length; i++)
    totalStudents += classes[i].students;
}
return totalstudents;
}
// let str = arr.join('')
// let n = parseInt(str)
//
// console.log(n)
// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.

// Bonus: instead of the total students, return the highest number of students in any class
