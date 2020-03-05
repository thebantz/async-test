/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- Don't generate your own number, use getNumLessThanTen
- No using setTimeout (must use waitOneSecond)
- No using fs.writeFile (use writeToHardDrive)
- No editing any file except main.js

NOTES
- the implementation of getNumLessThanTen is more complex than necessary. It is implemented in that manner solely to make it an asynchronous function.
*/



/*
1. find a way to get a randNumber using 2 seconds
   - get a random number less than 10,
      - import the "getNumLessThanTen" function
        - how do I run the file
*/
const getNum = require('./getNumLessThanTen.js');
console.log('getNum: ', getNum);
// wait three seconds
const wait = require('./waitOneSecond.js');
console.log('wait: ', wait);

const write = require('./writeToHardDrive.js');
console.log('write: ', write);
/*
2. Wait Three Seconds

*/
// write the number to the hard drive
// Then, once all that isdone, console log "I'm done!"

// getNum(callback => wait(
//   write(data, (err, data) => {
//   if(err) { throw err };
//   callback(null, data);
// })
// })

// getNum((err, number) => {
//   wait((err, responseString) => {
//     write((data, (err, data)) => {
//       console.log(number);
//       console.log(responseString);
//       callback(data, 'Im done');
//     })
//   })
// });

// getNum(wait(write(data, callback)));

// const callback = (err, successString) => {
//   if (successString) {
//     console.log("I'm done");
//   }
// }

// getNum(callback(err, number));

var arr = [];

getNum((err, number) => {
  wait((err, responseString) => {
    write(number, (err, successString) => {
      write(number * 100, (err, successString) => {
        console.log('Iv written a file w a number x10 bigger');
      })
    });
  });
});


// const createFile = (callback) => {
//   getNum((err, number) => {
//     wait((err, responseString) => {
//       write(number, (err, successString) => {
//         callback(err, number);
//       })
//     })
//   });
// }

///////////// wrong, will happen out of order
// var num = 0;
// getNum(); //returns number
// wait(); //console log i waited
// write(num); //write file // console log writen
// console.log('hello'); 

//changed number
//console.log(waited one sec)
//write file
//console.log(hello)