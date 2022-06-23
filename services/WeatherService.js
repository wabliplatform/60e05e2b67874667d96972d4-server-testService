/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Weather } = require('../models/Weather');

/**
* Creates the data
*
* weather Weather data to be created
* returns weather
* */
const createweather = ({ weather }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Weather(weather).save();
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
* weatherId String the Id parameter
* no response value expected for this operation
* */
const deleteweather = ({ weatherId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Weather.findOneAndDelete({ _id:weatherId }).exec();
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
const getAllweather = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Weather.find().exec();
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
* weatherId String the Id parameter
* returns weather
* */
const getweather = ({ weatherId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Weather.findById(weatherId)
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
* weatherId String the Id parameter
* weather Weather data to be updated (optional)
* returns weather
* */
const updateweather = ({ weatherId, weather }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Weather.findOneAndUpdate({ _id:weatherId },weather).exec();
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
  createweather,
  deleteweather,
  getAllweather,
  getweather,
  updateweather,
};
