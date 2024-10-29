const express = require('express');
const router = express.Router();
const upload = require('../middileware/multer')
const userController = require('../controllers/userController');
const feedbackController = require('../controllers/feedbackController')

router.post('/signup/email', userController.signupWithEmail);
router.post('/login/email',userController.loginWithEmail)
router.post('/sendOTP',userController.sendOTP)
router.post('/verifyOTP',userController.verifyOTP)
router.post('/signup/google',userController.loginWithGoogle)
router.put('/addName', upload.single('profilePhoto'), userController.addName);
router.post('/calculate-metrics',userController.calculateUserMetrics);
router.post('/home', userController.home);
router.post('/trackuser',userController.trackUser)
router.post('/updateWeight',userController.updateWeight)
router.get('/getWeightHistory',userController.getWeightHistory)
router.post('/feedback',feedbackController.submitFeedback)


module.exports = router;