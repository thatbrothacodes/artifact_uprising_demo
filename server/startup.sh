#!/bin/sh

sleep 20
sequelize db:seed:undo:all
sequelize --env production db:seed --seed 20200407032739-users.js
sequelize --env production db:seed --seed 20200408011759-products.js
yarn start

