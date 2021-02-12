const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('./build'))

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function conn(funcao) {
    MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }, funcao);
}

app.get('/prod', (req, res, next)=>{
  conn(
    (error, result)=> {
      const db = result.db("lojarecode");
      db.collection("produtos").find().toArray((error, result)=> {
        res.json(result)
    })
})
})

app.post('/cadprod', (req, res, next) => {
  let dados = {
      id: req.body.id,
      nome: req.body.nome,
      img: req.body.img,
      valor: req.body.valor,
      categoria: req.body.categoria,
      localimg: req.body.localimg
  }
  conn(
    (error, result)=> {
      result.db('lojarecode').collection('produtos').insert(dados, (error, inserido)=> {
        res.json({mensagem: "Inserido com sucesso!", jogo: inserido})
      })
    }
  )
})

app.delete('/delprod', (req, res, next)=> {
    conn(
      (error, result)=> {
        let jogo = {id: req.body.id}
        result.db('lojarecode').collection('produtos').deleteMany(jogo, (error, jogo)=> {
          res.json({msg: "Jogo excluido"})
        })
      }
  )
})



app.listen(4000, ()=> {
    console.log('Link da API: http://localhost:4000/prod')
    console.log('Link da aplicação: http://localhost:4000/')
})





