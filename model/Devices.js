const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const devicesSchema = new Schema({
    nome: {type: String, required: true, unique: true},
    descricao: {type: String, required: true},
    email: {type: String, required: true},
    imagem: {type: String, required: true},
    slug: {type: String, required: true, uniique: true, default: function(){return slug(this.nome)}},
    medidas: []
    //data: {type: Date, default: Date.now()},
    //rpm: {type: Number, required: true},
    //temperatura: {type: Number, required: true},
    //vibracao: {type: Number, required: true},
    //corrente: {type: Number, required: true},

})

module.exports = mongoose.model('devices', devicesSchema)