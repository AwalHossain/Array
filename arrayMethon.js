// const daysInWeek = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
//   ];
  
//  console.log( daysInWeek.join('hello  '));
  
//   const fruit = [
//     'apple', 
//     'orange', 
//     'grapefruit', 
//     'pineapple', 
//     'strawberry'
//   ];

// console.log(fruit.indexOf("orange"));

const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex ) {
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}

// It's not working or showing any message cause value "0" considered as falsey value