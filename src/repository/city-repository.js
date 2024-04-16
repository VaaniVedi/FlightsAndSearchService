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
            //the below approach also works but will not return updated object
            //if we are using pg then retruning true can be used, else not 
            //const city = await City.update(data, {
             //   where: {
            //        id: cityId
             //   }  
            //});
            //for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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

    async getAllCities(){
        try{
            const cities = await City.findAll();
            return cities;
        }catch{error}{
            console.log("Something went wrong at service layer");
            throw {error};            
        }
    }
}

module.exports = CityRepository;