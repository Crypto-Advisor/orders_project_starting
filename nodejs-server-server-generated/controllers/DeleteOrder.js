'use strict';

var utils = require('../utils/writer.js');
var DeleteOrder = require('../service/DeleteOrderService');

module.exports.deleteIdDelete = function deleteIdDelete (req, res, next, id) {
  DeleteOrder.deleteIdDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
