const getAll = require("./contacts");
const getById = require("./contacts");
const removeById = require("./contacts");
const add = require("./contacts");
const updateById = require("./contacts");
const updateStatusContact = require("./contacts");
const register = require("./auth");

module.exports = {
  getAll,
  getById,
  removeById,
  add,
  updateById,
  updateStatusContact,
  register,
};
