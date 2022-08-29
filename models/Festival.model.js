const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CATEGORY =['Rock','Pop','Reggeton','Indie','Techno']


const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Festival name is required.'],
        minLength: [3, 'Festival name must contain at least 3 characters.'],
        unique: [true, 'Festival name must be unique'],
    },
    category: {
        type: String,
        required: [true, 'category is required.'],
        enum: CATEGORY,
    },
    location:{
        type: String,
        required: [true, 'location is required.'],
    },
    description:{
        type: String,
        required: [true, 'Festival description is required.'],
        minLength: [3, 'Festival description must contain at least 3 characters.'],
    },
    price:{
        type:Number,
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/plasoironhack/image/upload/v1644663323/ironhack/multer-example/icono-de-li%CC%81nea-perfil-usuario-si%CC%81mbolo-empleado-avatar-web-y-disen%CC%83o-ilustracio%CC%81n-signo-aislado-en-fondo-blanco-192379539_jvh06m.jpg'
    },
    date:{
        type: Date,
        required: [true, 'Date is required.'],
    }
})

// VIRTUALS LIKE, COMMENT AND IMAGEN



const Festival = mongoose.model('Festival', festivalSchema);
module.exports = Festival;