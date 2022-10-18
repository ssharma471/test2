const express = require('express');
const path = require('path');
var data = require('./test2_moduleA.js');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8080;
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", (req, res) => {
    res.send("<h2>Declaration (text size in heading 2):</h2><p>The rest text is displayed in paragraph as shown in screenshot.<br>I acknowledge the college's academic intergrity policy - and my own intergrity - remain in effect whether my work is done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with my classmates... even when no one is watching. I declare I will not break the trust.</p>"+
    " Name: <b> <mark>Sidhant Sharma </mark> </b> <br><br> Student Number: <b> <mark>123151219 </mark> <b> <br><br> <a href='/BSD'>Click to visit BSD Students</a><br> <a href='/highGPA'>Click to see who has the highest GPA</a><br>")
});
app.get('/BSD', function(req, res) {
    data.getBSD().then((data) => {
        var bsd = JSON.stringify(data);
        res.send(bsd);
    });
    
  });
  app.get('/highGPA', function(req, res) {
    data.highGPA().then((data) => {
        var highgpa = data[0].studId+data[0].name +data[0].program +data[0].gpa ;
        res.send(highgpa);
    });

  });

  app.use((req, res) => {
    res.status(404).send("Sorry this page does not loaded");
  });
  
  data.init().then(function(data){
    app.listen(port, function(){
        console.log("Express http server listening on the port: " + port)
    });
  }).catch(function(err){
    console.log("Unable to start server: " + err);
  });
