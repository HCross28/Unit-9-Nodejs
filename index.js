const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const generateHTML = require('./generateHTML.js')

const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub Username"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
    }
];

var data = {};

function init() {

inquirer
    .prompt(
    questions
    )

    .then(function({ username }){ 
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        
        axios
        .get(queryUrl)
        .then(function(res) {
            try{
                const resData = res.data;
                    console.log(resData[0].owner.login);
                    /*resData.forEach(function(res){
                        var data = res.data;
                 
                    console.log(/* data.username,
                     data.public_repos,
                     data.location,
                     data.bio); 
                    }); */
                    
                
            }catch(err){
                throw err;
            }
        });
    });
}





//function writeToFile(fileName, data) {
 
//}


init(); 

