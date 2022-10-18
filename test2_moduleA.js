const fs = require('fs');
var studentss = [];

module.exports.init = function () {
    return new Promise( (resolve, reject) => 
    {
        fs.readFile("./students.json", (err, data) =>
        {
            if (err) { reject("Error loading file !!!"); }
            studentss = JSON.parse(data);
            resolve(data);
        });
    });
  }
  module.exports.getBSD = function () {
    return new Promise((resolve, reject)=> {
        var bsd = [];
        for (let i= 0; i < studentss.length; i++) {
          if (studentss[i].program == "BSD") {
            bsd.push(studentss[i]);
          }
        }
        if (studentss.length == 0) {
          reject("unable to find highest GPA");
        }
        resolve(bsd);
      });
      
  
  };
  

  module.exports.highGPA = function () 
  {
    return new Promise((resolve, reject)=> 
    {
        var highgpa = [];
        var high = studentss[0].gpa;
        for (let i= 0; i < studentss.length; i++) 
        {
            if (studentss[i].gpa > high){
                high = studentss[i].gpa;
                highgpa.push(studentss[i]);
            }
    
        }
        if (studentss.length == 0) {
          reject("No results returned");
        }
        resolve(highgpa);
      });
      
  
  };