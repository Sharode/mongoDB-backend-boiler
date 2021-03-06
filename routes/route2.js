const router = require('express').Router()

let Model2 = require('../models/model2.model')

// GET
router.route('/').get((req, res) => {
    Model1.find()
        .then(model1 => res.json(model1))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//POST
router.route('/add').get((req, res) => {
    const { username } = req.body;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router