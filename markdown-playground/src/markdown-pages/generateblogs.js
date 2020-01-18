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
/*
---
path: "/docs"
date: "2017-11-07"
title: "My first blog post"
---




*/
let dash ="---\n"
let path = `path: "/docs"\n`
let title = `title: "My first blog post"\n`
let data = `I am testing the  file\n`
let date = `date: "2017-11-07"\n`

fs.appendFileSync('blog.md', dash, function(err) {
    if (err) {
       return console.error(err);
    }
    
    

 });
 fs.appendFileSync('blog.md', path, function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    

 });
 fs.appendFileSync('blog.md',date,function(err){
     if(err){
         return console.error(err)
     }
 })
 fs.appendFileSync('blog.md', title, function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");    
    console.log("Let's read newly written data");
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    

 });
 fs.appendFileSync('blog.md', dash, function(err) {
    if (err) {
       return console.error(err);
    }


    

 });
fs.appendFileSync('blog.md',data, function(err) {
    if(err){
        return console.error(err)
    }
})