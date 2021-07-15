"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;

_app["default"].listen(PORT);

console.log("Server listen on port ".concat(PORT));