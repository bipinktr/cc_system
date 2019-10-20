const router = require('express').Router();
const CreditCardController = require('../controllers/credit-card');

//credit_card/get_all route
router.get('/get_all', (req, res) => {
    CreditCardController.getAllCreditCards(req, res);
});
//credit_card/add route
router.post('/add', (req, res) => {
    CreditCardController.addCreditCard(req, res);
});

module.exports = router;
