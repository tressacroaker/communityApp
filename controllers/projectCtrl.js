var ProjectModel = require("./../models/projectModel.js");
var mongoose = require("mongoose");

module.exports = {
    read: function(req, res){
        ProjectModel
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
        var project = new ProjectModel(req.body);
        project
        .save(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    },
    update: function(req, res){
        ProjectModel
        .findByIdAndUpdate(req.params.id, req.body,function(err, result){
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });

    },
    delete: function(req, res){
        ProjectModel
        .findByIdAndRemove(req.params.id, req.body, function(err, result){
            if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
        });
    }
};
