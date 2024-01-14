const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const sequelize = require('./util/database');
const Contact = require('./models/contact');



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use(errorHandler);

sequelize
   .sync()
   .then(result => {
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })
    })
    .catch(err=>{
    console.log(err)
    });
