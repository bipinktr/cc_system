'use strict';
//Migration to create credit_card table
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('credit_card', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            card_number: {
                type: Sequelize.STRING
            },
            limit: {
                type: Sequelize.FLOAT
            },
            balance: {
                type: Sequelize.FLOAT
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('credit_card');
    }
};