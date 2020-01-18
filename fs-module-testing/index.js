var fs = require("fs");
// Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//  });

//  // Synchronous read
//  var data = fs.readFileSync('input.txt');
//  console.log("Synchronous read: " + data.toString());

//  console.log("Program Ended");

console.log("//==========Opening File============//");
let data = "path: /blog/my-first-post,date: 2019-05-04,title: My first blog post"


fs.writeFile('input.txt', data, function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    
    fs.readFile('input.txt', function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
    });
 });
