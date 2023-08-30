const express = require('express');
var app = express();
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nms:nmspassword@cluster.eiu197s.mongodb.net/?retryWrites=true&w=majority/data", function(err){
    if(err){
        console.log(err);
    }else{
        console.log('MongoDB connection successfull');
    }
});

var Usermodel = mongoose.model('users', {name: String, username: String, email:String, password: String});

router.post('/registeruser', function(req, res){

     var newuser = new Usermodel({name:req.body.name, username:req.body.username,email:req.body.email, password:req.body.password});
    
     newuser.save(function(err){
        if(err){
            res.send('Something went wrong');
        }else{
            res.send('User registration successfull');
        }
     })
});

router.post('/loginuser', function(req, res){
    Usermodel.find({
        username:req.body.username,
        password:req.body.password
    }, function(err, documents){
        if(err){
            res.send('Something went wrong');
        }else{
            if(documents.length == 0){
                res.send('Login Failed');
            }else{
                res.send('Login Successfull');
            }
        }
    })
});

router.post('/getuser', function(req, res){
    Usermodel.find({}, function(err, documents){
        if(err){
            res.send('Something went wrong');
        }else{
            res.send(documents);
        }
    })
});

module.exports = router;