const { Op } = require ('sequelize');

const {Airport} = require ('../models/index');
class AirportRepository{

    async createAirport({ name,cityId }){ //{name: "Indira Gandhi International Airport"}
        if(!cityId){
            throw new error("City ID is required");
        }
        try{
            const airport= await Airport.create({
                name: name,
                cityId: cityId
            });
            return airport;
        } catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try{
            await Airport.destroy({
                where:{
                    id: airportId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try{
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            await airport.save();
            return airport;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAirport(airportId){
        try{
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch(error){
            console.log("Something went wrong in the repositroy layer");
            throw {error};
        }
    }
    async getAllAirports(filter){ //filter can be empty also (if filter is empty then return all cities)
        try{
            if(filter.name){
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name 
                        }
                    }
                });
                return cities;
            }
            const airports = await Airport.findAll();
            return airports;
        }catch{error}{
            console.log("Something went wrong at service layer");
            throw {error};            
        }
    }
}

module.exports=AirportRepository;