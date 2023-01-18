const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');

let CaloriasController = require('../controllers/'+config.ICaloriasController);

let caloriasController = new CaloriasController();



class Routes extends IRoutes{

  constructor() {   
    super();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  
app.use(cors());      
} // finaliza construtor

  get(){
      app.get('/', (req, res) => {
      res.send('Rest API Calorias');
      });
      app.get('/calorias', caloriasController.show);

      app.get('/calorias/search', caloriasController.index)

      app.get('/calorias/searchbyuser/:iduser', caloriasController.indexbyUser)
      
// lista user, filtrando por email
// ex: /user/buscaemail/?email=vaguetti@gmail.com
//=========================
  }
  post(){

    app.post('/calorias', caloriasController.store);
  }

  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = Routes;
