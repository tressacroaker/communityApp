var FundraiserModel = require("./../models/fundraiserModel.js");
var mongoose = require("mongoose");

module.exports = {
    read: function(req, res){
        FundraiserModel
        .find(req.query)
        .exec(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    },
    create: function(req, res){
        var fundraiser = new FundraiserModel(req.body);
        fundraiser
        .save(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    },
    update: function(req, res){
        FundraiserModel
        .findByIdAndUpdate(req.params.id, req.body,function(err, result){
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });

    },
    delete: function(req, res){
        FundraiserModel
        .findByIdAndRemove(req.params.id, req.body, function(err, result){
            if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });
    }
};
