import Car from "../models/car.js"

export const createCar = async (req, res) => {

    try {

        const dealer = new Car(req.body)
        await dealer.save();

        res.status(201).json(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }

}

export const getCars = async (req, res) => {
    try {

        const dealers = await Car.find()
        res.status(200).json(dealers)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// get car by id
export const getCar = async (req, res) => {
    try {

        const { id } = req.params
        const dealer = await Car.findOne({ _id: id })
        res.status(200).send(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// updeate car by id
export const updateCar = async (req, res) => {
    try {

        const { id } = req.params

        const dealer = req.body;

        const updatedDealer = await Car.findByIdAndUpdate(id, dealer, { new: true });


        res.status(200).send(updatedDealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// delete car by id
export const deleteCar = async (req, res) => {
    try {

        const { id } = req.params

        await Car.findByIdAndDelete(id)

        res.status(200).json({message: "car deleted successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// Get_all_cars_by_dealerId
export const Get_all_cars_by_dealerId = async (req, res) => {
    try {

        // const { id } = req.params.dealerID
        const id = req.params.dealerID


        console.log(id)

        const dealer = await Car.findOne({ dealerId: id })

        console.log(dealer)

        res.status(200).send(dealer)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// Get_all_cars_by_carMakeId
export const Get_all_cars_by_carMakeId = async (req, res) => {
    try {

        const id = req.params.carMakeId
        const dealer = await Car.findOne({ carMakeId: id })
        res.status(200).send(dealer)

        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}