const mongoose = require('mongoose');

const CaloriasSchema = new mongoose.Schema(
        {
          
          calorias: Number,
          compcode: Number,
          tempo : Number,
          distancia : Number,
          velocidade : Number,
          peso : Number,
		      _idUser: {
                 type: mongoose.Schema.Types.ObjectId, 
                 required: true
              },
          caminho : [{
          latitude : Number,
          longitude: Number,
          accuracy: String,
          }],
        },
         { timestamps: true }
);

module.exports = mongoose.model('Calorias', CaloriasSchema);