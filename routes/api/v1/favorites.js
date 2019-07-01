var express = require('express');
var router = express.Router();
var favoritesController = require('../../../controllers/api/v1/favorites_controller.js');

router.post('/', (req,res) => {
  favoritesController.create(req, res);
})

router.get('/', (req, res) => {
  favoritesController.index(req, res);
})

router.delete('/', (req, res) => {
  favoritesController.destroy(req, res);
})

module.exports = router;
