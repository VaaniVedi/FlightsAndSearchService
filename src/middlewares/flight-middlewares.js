const validateCreateFlight = (req,res,next) =>{
    if(
        !req.body.flightNumber || 
        !req.body.airplaneId || 
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price){
        //if any of the body params is missing we come inside the if block
        return res.status(400).json({
            //error code 400 is for bad request i.e. you are not following API Contract
            data: {},
            success: false,
            err: 'Missing mandatory properties to create a flight',
            message: 'Invalid request body for create flight'
        });
    }

    next(); //calls the next middleware
}

module.exports ={
    validateCreateFlight
}