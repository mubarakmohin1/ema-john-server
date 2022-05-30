const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
    res.send('server is connected');
});
app.listen(port,() =>{
    console.log('john is running on port',port);
})