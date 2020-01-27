const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },
    createdAt: {
        //Campo criado automaticamente para salvar a data de criação do produto
        type: Date,
        default: Date, now
    }
});

mongoose.model('Product', ProductSchema);