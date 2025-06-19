import CarMake from "../models/carmake.js"

export const createCarMake = async (req, res) => {

    try {

        const dealer = new CarMake(req.body)
        await dealer.save();

        res.status(201).json(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }

}

export const getCarMakes = async (req, res) => {
    try {

        const dealers = await CarMake.find()
        res.status(200).json(dealers)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// get carmake by id
export const getCarMake = async (req, res) => {
    try {

        const { id } = req.params
        const dealer = await CarMake.findOne({ _id: id })

        if(!dealer){
            res.status(404).json({error: "car make not found"})
            return
        }

        res.status(200).send(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// updeate carmake by id
export const updateCarMake = async (req, res) => {
    try {

        const { id } = req.params

        const dealer = req.body;

        const updatedDealer = await CarMake.findByIdAndUpdate(id, dealer, { new: true });

        if(!updatedDealer){
            res.status(404).json({error: "car not found"})
            return
        }

        res.status(200).send(updatedDealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// delete carmake by id
export const deleteCarMake = async (req, res) => {
    try {

        const { id } = req.params

        const carMake = await CarMake.findByIdAndDelete(id)

        if(!carMake){
            res.status(404).json({error: "car make not found"})
            return
        }

        res.status(200).json({message: "car make deleted successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}