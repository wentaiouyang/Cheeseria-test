import * as express from 'express';
const cheeses = require('./data/cheeses.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {
    res.json(cheeses);
});

router.post('/api/purchase',(req,res,next)=>{
    req.on('data', (chunk) => {
        res.send(`Data chunk available: ${chunk}`)
      })
})


export default router;