const ICaloriasController = require('./ICaloriasController.js');


const config = require('../config.js');
const CaloriasDAO = require('../persistencelayer/dao/'+config.ICaloriasDAO);
let caloriasdao = new CaloriasDAO();

class CaloriasController extends ICaloriasController{
  constructor(){
    super();
       
  }

  
  async show(req, res)
    {
  
       let calorias = await caloriasdao.recovery();
        return res.json(calorias);
    }
  async store(req, res)
     {
        const caloria =  await caloriasdao.create(req);
        return res.json(caloria);
     }
   async destroy(req,res){
         let caloria = await caloriasdao.delete(req);
         return res.json(caloria);
    }
   async update(req,res){
        let caloria = await caloriasdao.update(req);
        return res.json(caloria);
    }

   async index(req,res)
    {
        let calorias = await caloriasdao.search(req);
        return res.json(calorias);
    }

  async indexbyUser(req,res)
    {
        let calorias = await caloriasdao.searchbyUser(req);
        return res.json(calorias);
    }
  
}
module.exports = CaloriasController;