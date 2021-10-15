import {Schema, model} from 'mongoose'

const messageSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
        required: true,
    }
});

export default model('Message', messageSchema);