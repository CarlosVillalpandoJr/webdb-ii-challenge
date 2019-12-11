const express = require("express");

const db = require('../dbConfig')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    db
        .select("*")
        .from("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500)
                .json({ error: "Error getting cars" })
        })
})

router.post('/', (req, res) => {
    const carData = req.body;
    if(carData.vin && carData.make && carData.model && carData.mileage) {
        db("cars")
            .insert(carData, 'id')
            .then(ids => {
                const id = ids[0]

                return db("cars")
                    .select('id','vin','make','model','mileage')
                    .where({ id })
                    .first()
                    .then(car => {
                        res.status(201).json(car)
                    })
            })
            .catch(error => {
                res.status(500)
                    .json({ error: "Error adding new car to database" })
            })
    } else {
        res.status(400)
            .json({ message: "Please include all fields" })
    }
})




module.exports = router;