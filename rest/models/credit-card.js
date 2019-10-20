'use strict';
// Credit Card Model
const cardNumberValidate = require('../validators/credit-card');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('credit_card', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'The name is required'
                }
            }
        },
        card_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'The card number is required'
                },
                customValidation(value) {
                    cardNumberValidate(value);
                }
            }
        },
        limit: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'The limit is required'
                },
                customValidation(value) {
                    if (!/^\d+$/.test(value)) {
                        throw new Error('The limit will always be numeric');
                    }
                }
            }
        },
        balance: {type: DataTypes.FLOAT, defaultValue: 0},
    }, {});
};