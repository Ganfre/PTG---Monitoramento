const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/', async (req, res)=>{
    try{
        const listaDevices = await Device.find()
        res.json({
            success: true,
            message: listaDevices
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível listar os devices."
        })
    }
})

router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        email: req.body.email,
        imagem: req.body.imagem,
        temperatura: req.body.temperatura,
        vibracao: req.body.vibracao,
        corrente: req.body.corrente,
        rpm: req.body.rpm
    })
    try{
        const saveNewDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNewDevice
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar um novo device."
        })
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const updateDevideId = await Device.updateOne(
            {_id: req.params.id},
            {temperatura: req.body.temperatura,
            vibracao: req.body.vibracao,
            corrente: req.body.corrente,
            rpm: req.body.rpm}
        )
        res.json({
            success: true,
            updated: updateDevideId.nModified
        })
    }
    catch(err){
        res.json({
            success: false,
            message: "Não foi possível atualizar o device."
        })
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deleteMedidasId = await Medidas.deleteOne({
            _id: req.params.id
        })
        res.json({
            success: true,
            data: deleteMedidasId
        })
    }
    catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

module.exports = router