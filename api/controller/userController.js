const User = require('../model/userModel');


//getAlluserController
const getAlluserController = ( req, res, next ) => {
    User.find()
        .then(data => {
            res.status(200).json({
                message: "All User Grabed Successfully!",
                users: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error Occured'
            });
        })
}

//postUserController
const postUserController = (req, res, next ) => {
    const user = new User({
        name: req.body.name,
        fathersName: req.body.fathersName,
        mothersName: req.body.mothersName,
        dateOfbirth: req.body.dateOfbirth,
        location: req.body.location
    });


    user.save()
        .then(data => {
            res.status(201).json({
                message: 'New User Post On Database Successfully!',
                user: data
            })
        })
        .catch(err => {
            console.log(err);
            
            res.status(500).json({
                message: 'Error Occured'
            });
        })
        
}

//getSingleUserController 
const getSingleUserController = (req, res, next) => {
    let id = req.params.id;

    User.findOne({_id : id})
        .then(data =>  {
            res.status(200).json({
                message: 'Single user Grabed Successfully!',
                user: data
            })
        })
        .catch(err => {
            console.log(err);
            
            res.status(500).json({
                message: 'Error Occured'
            });
        })
}

//updateUserController
const updateUserController = (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, {$set: {
        name: req.body.name ? name : req.body.fathersName,
        fathersName: req.body.fathersName,
        mothersName: req.body.mothersName,
        dateOfbirth: req.body.dateOfbirth,
        location: req.body.location,
        
    }})
    .then(data =>  {
        res.status(200).json({
            message: 'User Updated Successfully!',
            user: data
        })
    })
    .catch(err => {
        // console.log(err);
        
        res.status(500).json({
            message: 'Error Occured'
        });
    })

}

//deleteUserController 
const deleteUserController = (req, res, next) => {
    let id = req.params.id;
    User.deleteOne({_id : id })
    .then(
        res.status(200).json({
            message: 'Message user Deleted Successfully!'
        })
    )
    .catch(err => {
        console.log(err);
        
        res.status(500).json({
            message: 'Error Occured'
        });
    })
}


//EXPORTS CONTROLLER
module.exports = {
    getAlluserController,
    postUserController,
    getSingleUserController,
    updateUserController,
    deleteUserController
}