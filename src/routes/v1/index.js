const express = require ('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city',CityController.create); //If someone calls /v1/city then they'll be redirected or sent to CityController 's create fx
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/airports',AirportController.create); //done
router.delete('/airports/:id',AirportController.destroy); //done
router.get('/airports/:id',AirportController.get); //done
router.get('/airports',AirportController.getAll);  //done
router.patch('/airports/:id',AirportController.update); //done

router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);

module.exports = router;