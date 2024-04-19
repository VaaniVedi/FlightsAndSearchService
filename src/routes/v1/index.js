const express = require ('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city',CityController.create); //If someone calls /v1/city then they'll be redirected or sent to CityController 's create fx
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/airport',AirportController.create); //done
router.delete('/airport/:id',AirportController.destroy); //done
router.get('/airport/:id',AirportController.get); //done
router.get('/airport',AirportController.getAll);  //done
router.patch('/airport/:id',AirportController.update); //done

module.exports = router;