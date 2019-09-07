const express = require('express');
const PORT = process.env.PORT || 3001; 

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>App is working:</h1>');

});

app.listen(PORT, () => {
    console.log("Server is listening at PORT:" + PORT);
});

