const express = require('express')
const router = express.Router();

let contact = [
    {id: 001, 
        Firstname: 'Chutima', 
        Lastname: 'Cherdchome', 
        email: 'chu_1234@mail.com', 
        URL: 'www.google.com', 
        Note: 'Like read a book'},
    {id: 002, 
        Firstname: 'Kanjana', 
        Lastname: 'Gatepan', 
        email: 'Kikky_kan@mail.com', 
        URL: 'www.google.com', 
        Note: 'Play guitar'},
    {id: 003, 
        Firstname: 'Chonthicha', 
        Lastname: 'Joyseekate', 
        email: 'Pui030@mail.com', 
        URL: 'www.google.com', 
        Note: 'Study Com-sci'},
    {id: 004, 
        Firstname: 'Patcharaphon', 
        Lastname: 'Chaladthunyakij', 
        email: 'Googpat@mail.com', 
        URL: 'www.google.com', 
        Note: 'Do not like playFootball '},
    {id: 005, 
        Firstname: 'Chatmongkol', 
        Lastname: 'Lintalak', 
        email: 'mookko_005@mail.com', 
        URL: 'www.google.com', 
        Note: 'Play Game'},
    {id: 006, 
        Firstname: 'Supansa', 
        Lastname: 'chimbanrai', 
        email: 'mild20@mail.com', 
        URL: 'www.google.com', 
        Note: 'Like Korea'},
];

router.get('/contact', (req, res) => {
    res.json(contact)
})

router.get('/contact/Firstname/:Firstname',(req,res)=>{
res.json(contact.find(contact => contact.Firstname==req.params.Firstname))
})

router.delete('/contact/:id', (req, res) => {
    for(i=0 ; i < contact.length ; i++){
         if(contact[i].id ===  parseInt(id))
        {
            contact.splice(i,1)
                break;
    
        }
    }
    })

router.post('/contact/:id', (req, res) => 
{ 
    if(contact.length)
    {
        req.body.id = contact[contact.length-1].id + 1;
        contact.push(req.body);
    }
    })

router.put('/contact/:id', (req, res) => {
    for(i=0 ; i < contact.length ; i++){
        if(contact[i].id ===  parseInt(id))
        {
            contact[i] = req.body
                break;
        
        }
    }
    })   
module.exports=router