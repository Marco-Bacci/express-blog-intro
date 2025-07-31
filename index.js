// importo express
const express = require ('express')
// chiamo la funzione express e ne restituisco il valore in una variabile
const app = express()
// chiamo la porta 3000
const port = 3000

// definisco la rotta base
app.get('/', (req, res)=>{
  res.send('Server del mio blog')
})

// insersico middleware per file statici
app.use(express.static('public'));

app.get('/bacheca', (req, res)=>{
  const movies = [
    {
      titolo:"Il Padrino",
      contenuto:"La saga mafiosa più iconica della storia del cinema",
      immagine:"/img/padrino.jpg",
      tags:["drammatico", "mafia", "classico", "anni '70"],
    },
    {
      titolo:"Inception",
      contenuto:"Un labirinto mentale dove il confine tra realtà e sogno si fa sottile",
      immagine:"/img/inception.jpg",
      tags:["fantascienza", "thriller", "azione", "mind-bending"],
    },
    {
      titolo:"Lock & Stock",
      contenuto:"Un intreccio brillante di truffe, gangster e humour britannico in stile pulp",
      immagine:"/img/lockstock.jpg",
      tags:["crime", "commedia", "britannico", "anni '90", "cult"],
    },
    {
      titolo:"Il Signore degli Anelli",
      contenuto:"Magia, amicizia e coraggio si intrecciano in una delle saghe fantasy più amate di sempre",
      immagine:"/img/ilsignoredeglianelli.jpg",
      tags:["fantasy", "avventura", "epico", "trilogia"],
    },
    {
      titolo:"Parasite",
      contenuto:"Una satira sociale pungente che mescola dramma, suspense e colpi di scena",
      immagine:"/img/parasite.jpg",
      tags:["thriller", "drammatico", "coreano", "sociale"],
    }
  ];
  res.json(movies)
})




// dico al server di rimanere in ascolto sulla porta
app.listen(port, ()=>{
  console.log(`Server del blog in ascolto sulla porta ${port}`)
})