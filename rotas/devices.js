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

router.get('/detalhes/:id', async (req,res)=>{
    try{
        const deviceID = await Device.findById({
            _id: req.params.id
        })
        res.json({
            success: true,
            message: deviceID
        })
    }
    catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})


router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        descricao: req.body.descricao,
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

router.put('/:id', async (req,res)=>{
    try{
        const updateDeviceId = await Device.updateOne({_id: req.params.id},{$push: {medidas: req.body.medidas}}
        )
        res.json({
            success: true,
            updated: updateDeviceId.nModified
        })

    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deleteMedidasId = await Device.deleteOne({
            _id: req.params.id   
        });
        res.json({
            success: true,
            data: deleteMedidasId
        })
    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const updateDevice = await Device.updateOne(
            {_id: req.params.id},
            {
                nome: req.body.nome,
                descricao:req.body.descricao,
                imagem: req.body.imagem
            }
        )
            res.json({
                success: true,
                updated: updateDevice.nModified
            })
    }
    catch{
        res.json({
            success: false,
            data: err
        })
    }
})

module.exports = router