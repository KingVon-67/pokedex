
//serveur express


const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/api', (req, res) => {
  res.send(pokedex)
})
// creation du pokedex
const pokedex = [
  { id: 1, name: "Bulbizarre", type: "plante", level: 5 },
  { id: 4, name: "Salamèche", type: "feu", level: 5 },
  { id: 7, name: "Carapuce", type: "eau", level: 5 },
  { id: 25, name: "Pikachu", type: "electrik", level: 12 },
  { id: 39, name: "Rondoudou", type: "fee", level: 8 },
  { id: 52, name: "Miaouss", type: "normal", level: 9 },
  { id: 133, name: "Evoli", type: "normal", level: 10 }
];

// toutes les requetes

// 1
// lister les Pokemons avec limite

app.get('/api/pokemon',(req,res)=>{
var limit = req.query.limit
if (limit){
    if (limit > 0) {
        res.send(pokedex.slice(0, limit));
    }else {
        res.send('ERREUR 400')
    }
}else {
    res.send(pokedex)
}
})

app.get('/api/pokemon/', (req, res) => {
  var limit = req.query.limit;

  if (limit) {
    if (limit > 0) {
      res.send(pokedex.slice(0, limit))
    }
  }
})





// 2
// chercher un pokemon par id

app.get('/api/pokemon/:id',(req,res)=>{
  var ID = req.params.id
  
  if(ID > 0){
    var Identifiant = pokedex.find(p => p.id == ID)
    if(Identifiant == undefined){
      res.send("ERREUR 404")
    }
    else{
      res.send("Erreur")
         res.send(Identifiant)
    }
  }
  else{
    res.send(pokedex)
    res.send('ERREUR 400')
  }
  
})


// 3
// chercher un pokemon par type
app.get('/api/type/:type' ,(req,res)=>{
  var TYPE = req.params.type.toLowerCase()
  
  var saltype = pokedex.filter(p => p.type == TYPE)
  if (saltype.length == 0){
    res.send("ERREUR 404")
  }
  else{
      res.send(saltype)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


