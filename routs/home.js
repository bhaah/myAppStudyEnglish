const express = require('express');
const { session } = require('passport');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
})

module.exports = router;