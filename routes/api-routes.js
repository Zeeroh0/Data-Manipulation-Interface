const db = require('../models');

module.exports = (app) => {

    app.get('/api/:id', (req, res) => {
        db.ExpenseData.findAll({
            where: {
                PropertyID: req.params.id
            }
        })
        .then((data) => {
            res.json(data);
        });
    });

};


