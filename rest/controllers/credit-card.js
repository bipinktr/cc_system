const db = require('../models');
const Sequelize = require('sequelize');

class CreditCardController {
    /**
     * GET - REST API for get all cards
     * @param req
     * @param res
     * @returns {Promise<T | never>}
     */
    static getAllCreditCards(req, res) {
        return db.credit_card.findAll()
            .then((contacts) => res.send(contacts))
            .catch((err) => {
                console.log(err);
                return res.status(500).send({"message": "error occurred"});
            });
    }

    /**
     * POST - REST API for add new card
     * @param req
     * @param res
     * @returns {Q.Promise<any>}
     */
    static addCreditCard(req, res) {
        let {name, card_number, limit} = req.body;
        name = name ? name.toString().trim() || null : null;
        card_number = card_number ? card_number.toString().replace(/\s/g, "") || null : null;
        limit = limit ? limit.toString().replace(/\s/g, "") || null : null;

        return db.credit_card.create({name, card_number, limit})
            .then((contact) => res.send(contact))
            .catch(Sequelize.ValidationError, err => { // Validation errors 400
                let errors = [];
                if (err.errors && err.errors.length > 0) {
                    err.errors.forEach((item) => {
                        errors.push({
                            field: item.path,
                            message: item.message,
                        });
                    });
                }
                return res.status(400).send(errors);
            })
            .catch((err) => { // Errors 500
                let error = "error occurred";
                if (err.errors && err.errors.length > 0) {
                    error = err.errors[0].message
                }
                return res.status(500).send({
                    message: error,
                });
            });
    }

}

module.exports = CreditCardController;