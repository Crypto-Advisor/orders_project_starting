'use strict';

var utils = require('../utils/writer.js');
var PostOrder = require('../service/PostOrderService');

module.exports.neworderPost = function neworderPost (req, res, next, body) {
  PostOrder.neworderPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
