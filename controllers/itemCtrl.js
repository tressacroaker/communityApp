var ItemModel = require("./../models/itemModel.js");
var mongoose = require("mongoose");

module.exports = {
    read: function(req, res){
        ItemModel
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
        var item = new ItemModel(req.body);
        item
        .save(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    },
    update: function(req, res){
        ItemModel
        .findByIdAndUpdate(req.params.id, req.body,function(err, result){
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });

    },
    delete: function(req, res){
        ItemModel
        .findByIdAndRemove(req.params.id, req.body, function(err, result){
            if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });
    }

};
