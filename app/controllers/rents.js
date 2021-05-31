var mongoose = require("mongoose"),
  Model = require("../models/rent");

exports.getAll = async (req, res, next) => {

};

exports.find = async (req, res, next) => {

};

exports.delete = async (req, res, next) => {
  
};

exports.add = async (req, res, next) => {   
  //price: Precio del coche x el numero de dias. PAra saber el precio del coche debes obtener ANTES la info del coche seleccionado
  var el = {
    car: "",
    client: "",
    days: "",
  };
  //Operaciones para guardar en la DB

};