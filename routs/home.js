const express = require('express');
const { session } = require('passport');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
})

router.get('/allWords',(req,res)=>{
    res.render('allWords');
})

router.get('/randomWords',(req,res)=>{
    res.render('randomWords');
})

module.exports = router;