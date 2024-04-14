const express = require ('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',CityController.create); //If someone calls /v1/city then they'll be redirected or sent to CityController 's create fx

module.exports = router;