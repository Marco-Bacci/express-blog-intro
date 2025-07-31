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
// dico al server di rimanere in ascolto sulla porta
app.listen(port, ()=>{
  console.log(`Server del blog in ascolto sulla porta ${port}`)
})