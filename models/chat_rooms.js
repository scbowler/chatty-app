const mongoose = require('mongoose');
const Schema = mongoose.Schema;

chatRoomSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    chatLog: Array
});

const ModelClass = mongoose.model('chatroom', chatRoomSchema);

module.exports = ModelClass;
