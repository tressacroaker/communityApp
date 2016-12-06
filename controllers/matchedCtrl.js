var MatchedModel = require("./../models/matchedModel.js");
var mongoose = require("mongoose");

module.exports = {
    read: function(req, res){
        MatchedModel
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
        var matched = new MatchedModel(req.body);
        matched
        .save(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    },
    update: function(req, res){
        MatchedModel
        .findByIdAndUpdate(req.params.id, req.body,function(err, result){
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });

    },
    delete: function(req, res){
        MatchedModel
        .findByIdAndRemove(req.params.id, req.body, function(err, result){
            if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });
    }
};
