const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const devicesSchema = new Schema({
    nome: {type: String, required: true, unique: true},
    slug: {type: String, required: true, uniique: true, default: function(){return slug(this.nome)}},
    temperatura: {type: Number, required: true},
    vibracao: {type: Number, required: true},
    corrente: {type: Number, required: true},
    rpm: {type: Number, required: true}
})

module.exports = mongoose.model('devices', devicesSchema)