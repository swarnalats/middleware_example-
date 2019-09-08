const auth = require('./middleware/auth');
const express = require('express');
const PORT = process.env.PORT || 3001; 

const app = express();

app.get('/api/articles',auth([1,2]), (req,res)=>{

    
    const articles = [
    {
        title:'All about Cats',
        content:"ASDFGGRR"                        
    },
    {
        title:'All about Dogs' ,
        content:' JKLLGG',
    },
    {
        title:"All about Foxes",
        content:"qqqqqqq"
    }];

    res.send(articles);
});

app.get('/api/users',auth([2]), (req,res)=>{

    const users = [
    {
        name:'Ven',
        email:"v@gmail.com"
    },
    {
        name:"Anu",
        email:"anu@gmail.com"
    },
    {
        name:"Kelly",
        email:"kel@yahoo.com"
    },
    {
        name:"Brian",
        email:"nrian@gmail.com"
    }
];

    res.send(users);
});

app.get('/api/profile',auth, async (req,res)=>{
    console.log('Query string:',req.query);
    
    res.send(req.user);
})

app.listen(PORT, () => {
    console.log("Server is listening at PORT:" + PORT);
});

