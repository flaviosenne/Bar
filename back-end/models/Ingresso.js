const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   //cadastra ingressos
   nome: {
      type: String,
      required: true
   },
   RG: {
      type: Number,
      required: true,
      index: {unique: true}
   },
  
   tipo_ingresso: {
      type: String,
      // S - Social
      // V - Vip
      // E - Elite

      enum: ['S','V','E'],
      default: 'S',
      required: true
   },
   vaga: {
      type: Boolean,
      default: false,
   },
   n_vaga:{ //caso precise de vaga
      type: Number,
      require: () => this.vaga,
      maxLength:2, // ate 99 vagas 
      autoIncrement: true,
      index: {unique: true},
   },
   portaria_ingresso:{
      type: mongoose.ObjectId,
      ref: 'Portaria', // Nome do model referenciado
      required: false
   },

})

module.exports = mongoose.model('Ingresso', esquema, 'ingressos')