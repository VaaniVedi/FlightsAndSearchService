const { where } = require('sequelize');
const {City} = require('../models/index');
class CityRepository{

    async createCity({ name }){ // {name: "New Delhi"}
        try{
            const city= await City.create({
                name: name
            });
            return city;
        } catch(error){
            console.log("Something went wrong in the repositroy layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repositroy layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){// data is: `{name:"Delhi"}`
                                // passing 2 parameters, 1st to identify which column needs to be updated and 2nd is with what data it is be updated
        try{
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repositroy layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("Something went wrong in the repositroy layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;