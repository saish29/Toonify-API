const express = require('express')
const router = express.Router()

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
const { Router } = require('express');

deepai.setApiKey('af2e7235-d674-4c78-92db-df64afb2df32');



router.get('/', (req, res, next )=> {


    
const image = req.query.image

console.log(image)

async function start(image) {
    var resp = await deepai.callStandardApi("toonify", {
            image: image,
    });
    // console.log(resp);

    res.status(200).json({

        outputURL: resp.output_url
            
    })
}

start(image);

})


module.exports = router;