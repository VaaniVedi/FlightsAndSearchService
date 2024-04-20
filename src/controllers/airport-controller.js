/*const{ AirportService }= require('../services/index');

const airportService = new AirportService();
//CREATE-> /airport
const create = async (req,res) => {
    try{
        const airport= await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message :'Successfully created an airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create an airport',
            err: error
        });
    }
}
//DELETE -> /airport/:id
const destroy = async(req,res) => {
    try{
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message :'Successfully deleted an airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete an airport',
            err: error
        });
    }
}

//GET -> /airport/:id
const get = async (req,res) =>{
    try{
        const response = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message :'Successfully fetched an airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch an airport',
            err: error
        });
    }
}

//PATCH -> /airport/:id -> req.body
const update = async(req,res) =>{
    try{
        const response = await airportService.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message :'Successfully updated an airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update an airport',
            err: error
        });
    }
}

const getAll = async(req,res) =>{
    try{
        const response = await airportService.getAllAirports(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            message :'Successfully fetched all airports',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all airports',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}
*/

const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            successs: true,
            message: 'Successfully created the airport',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create
};