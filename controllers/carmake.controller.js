import CarMake from "../models/carmake.js"

export const createDealer = async (req, res) => {

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

export const getDealers = async (req, res) => {
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

// get dealer by id
export const getDealer = async (req, res) => {
    try {

        const { id } = req.params
        const dealer = await CarMake.findOne({ _id: id })
        res.status(200).send(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// updeate dealer by id
export const updateDealer = async (req, res) => {
    try {

        const { id } = req.params

        const dealer = req.body;

        const updatedDealer = await CarMake.findByIdAndUpdate(id, dealer, { new: true });


        res.status(200).send(updatedDealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}

// delete dealer by id
export const deleteDealer = async (req, res) => {
    try {

        const { id } = req.params

        await CarMake.findByIdAndDelete(id)

        res.status(200).json({message: "dealer deleted successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }
}