/**
 * The CityController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CityService');
const createcity = async (request, response) => {
  await Controller.handleRequest(request, response, service.createcity);
};

const deletecity = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletecity);
};

const getAllcity = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllcity);
};

const getcity = async (request, response) => {
  await Controller.handleRequest(request, response, service.getcity);
};

const updatecity = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatecity);
};


module.exports = {
  createcity,
  deletecity,
  getAllcity,
  getcity,
  updatecity,
};
