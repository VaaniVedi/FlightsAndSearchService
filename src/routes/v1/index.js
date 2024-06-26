const express = require ('express');

const {FlightMiddlewares} = require('../../middlewares/index');

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
/*
router.delete('/airports/:id',AirportController.destroy); //done
router.get('/airports/:id',AirportController.get); //done
router.get('/airports',AirportController.getAll);  //done
router.patch('/airports/:id',AirportController.update); //done
*/

router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);

router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update);

module.exports = router;