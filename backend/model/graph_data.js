
const mongoose = require('mongoose');
const Double = require('@mongoosejs/double')


const Schema = mongoose.Schema

module.exports = mongoose.model('graph_data', 
               new Schema({ 
                createdAt:Date,
                serialNo: String,
                clientID:String,
                deviceMapID:String,
                devices:Array,
                total_kwh:Number,
                updatedAt:Date,
                ac_run_hrs:Number,
                ac_fan_hrs:Number,
                algo_status:Number,
                billing_ammount:Number,
                cost_reduction:String,
                energy_savings:Object,
                mitigated_co2:Number,
                weather:Object,
               }), 
               'datas');