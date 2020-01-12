const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

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


inquirer
    .prompt(/* {
        type: "input",
        name: "username",
        message: "Enter you GitHub username"
        
    },
    {
        type:"list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
    }  */
    questions
    )
    .then(function({ username }, { color }) { 
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios
        .get(queryUrl)
        .then(function(res) {
            try{
                const repoData = res.data;
                repoData.forEach(function(repo) {
                    console.log(repo.name)
                })
            }catch(err){
                throw err;
            }
        });
    });





/*
function writeToFile(fileName, data) {
 
}

function init() {

init(); */

