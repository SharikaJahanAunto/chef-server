const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const recipes = require('./data/recipes.json')

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipe = recipes.find(r => r._id === id);
  
    if (recipe) {
      res.send(recipe);
    } else {
      res.status(404).send(`Recipe with id ${id} not found`);
    }
});



const chefs = require('./data/chefs.json')


app.get('/', (req, res) =>{
    res.send('chefs are running')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(c => c._id === id);
  
    if (chef) {
      res.send(chef);
    } else {
      res.status(404).send(`Chef with id ${id} not found`);
    }
  });
  

app.listen(port, () => {
    console.log(`chef API is running on port: ${port}`);
})