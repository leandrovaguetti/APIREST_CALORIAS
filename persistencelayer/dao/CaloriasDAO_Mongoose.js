const mongoose = require('mongoose');

const ICaloriasDAO = require('./ICaloriasDAO.js');

const Calorias = require('../models/Calorias');


class CaloriasDAO_Mongoose extends ICaloriasDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://ifmais:ifplus@ifmaissaude.pso22sz.mongodb.net/ifmaiscalorias?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const caloria =  await Calorias.create(req.body);
          return caloria;
     }  
     async recovery(){ 
          let calorias = await Calorias.find().sort({ createdAt: -1 }).limit(7);
          return calorias; 
         }
     async update(req){
       let caloria = await Calorias.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return caloria;
       
     }
     async delete(req){
        let caloria = await    Calorias.findByIdAndRemove(req.params.id);
        return caloria; 
     } 
  
     async search(req){
        let calorias = await Calorias.find(
          { _idUser : req.query.idUser}
                                 ).sort({ createdAt: -1 }).limit(7); 
       return calorias;
       
     } 

    async searchbyUser(req){
        let calorias = await Calorias.find(
          { _idUser : req.params.iduser}
                                 ).sort({ createdAt: -1 }).limit(7); 
       return calorias;
       
     } 
     
   
}
module.exports = CaloriasDAO_Mongoose;