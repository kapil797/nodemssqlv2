
const asyncHandler = require("express-async-handler")
const Contact = require('../models/contact')
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler((req,res)=>{

    Contact.findAll().then(data=>{res.send(data)}).catch(err=>{console.log(err)});
    //res.status(200).json({massage : "Get all contacts"});
}) 

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler((req,res)=>{
    console.log("the request body is :", req.body);
    const {email,number} = req.body;
    if(!email || !number){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    Contact.create({
        email: email,
        number: number
    }).then(res=>{
       console.log('Created Contact');
    }).catch(err=>{
        console.log(err);
    });
   
}) 


//@desc Get  contact
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler((req,res)=>{
    // res.status(200).json({massage : `Get contacts ${req.params.id}`});
    const contactId = req.params.id;
    Contact.findByPk(contactId).then(data=>{res.send(data)}).catch(err=>{console.log(err)});
}) 

//@desc Update  contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req,res)=>{
    const {email,number} = req.body;
    const contactId = req.params.id;
    Contact.findByPk(contactId).then(contact=>{
        contact.email = email;
        contact.number = number;
        return contact.save();
    })
    .then(result => {console.log('Updated Contact!')})
    .catch(err=>{console.log(err)});
    // res.status(200).json({massage : `Update contacts ${req.params.id}`});
}) 

//@desc Delete  contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler((req,res)=>{
    const contactId = req.params.id;
    Contact.findByPk(contactId).then(contact => {return contact.destroy();}).then(result=> {console.log('Contact Deleted!')}).catch(err=> console.log(err))
    // res.status(200).json({massage : `Delete contacts ${req.params.id}`});
}) 

module.exports ={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}