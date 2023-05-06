// server-express.js
let counter = 0;
const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

//GET function that returns the number of visit for this node session

app.get('/visits', (req, res) => { //at the '/visit' route
	counter += 1 //increase var by 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});
//rock paper scissors game, each route is the option select. The bot will randomly select one of three options.

app.get('/rock', (req, res) => {//if users pick rock
    const rndInt = Math.floor(Math.random() * 3) + 1 //generate a random num from 0 to 1 n *by 3 and add 1. Then it floors value
    console.log(rndInt) //  print our the choice of the bot
    if (rndInt===3){
        res.send("Bot picked scissor. You win!")
    }else if (rndInt===1){
        res.send("Bot picked rocks. Tie! ")
    }else if(rndInt===2){
        res.send("Bot picked paper. You lose.")
    }
});

app.get('/paper', (req, res) => {//pick paper
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt) 
    if (rndInt===1){
        res.send("Bot picked rocks. You win!")
    }else if (rndInt===2){
        res.send("Bot picked paper. Tie! ")
    }else if(rndInt===3){
        res.send("Bot picked scissors. You lose.")
    }
});

app.get('/scissors', (req, res) => {//pick scissors
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt) 
    if (rndInt===2){
        res.send("Bot picked paper. You win!")
    }else if (rndInt===3){
        res.send("Bot picked scissors. Tie! ")
    }else if(rndInt===1){
        res.send("Bot picked rocks. You lose.")
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
