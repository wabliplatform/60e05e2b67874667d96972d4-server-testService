/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { City } = require('../models/City');

/**
* Creates the data
*
* city City data to be created
* returns city
* */
const createcity = ({ city }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new City(city).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* cityId String the Id parameter
* no response value expected for this operation
* */
const deletecity = ({ cityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await City.findOneAndDelete({ _id:cityId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllcity = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await City.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* cityId String the Id parameter
* returns city
* */
const getcity = ({ cityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await City.findById(cityId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* cityId String the Id parameter
* city City data to be updated (optional)
* returns city
* */
const updatecity = ({ cityId, city }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await City.findOneAndUpdate({ _id:cityId },city).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createcity,
  deletecity,
  getAllcity,
  getcity,
  updatecity,
};
