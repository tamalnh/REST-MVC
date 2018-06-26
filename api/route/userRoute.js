const router = require('express').Router();
const userController = require('../controller/userController');
//get all user
router.get('/', userController.getAlluserController);

//post user
router.post('/', userController.postUserController);

//get single user
router.get('/:id', userController.getSingleUserController);

//update user 
router.patch('/:id', userController.updateUserController);

//delete user 
router.delete('/:id', userController.deleteUserController);

module.exports = router;