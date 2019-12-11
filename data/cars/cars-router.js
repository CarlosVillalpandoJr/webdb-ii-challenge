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




module.exports = router;