const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    room: {
        type: mongoosel.Schema.Types.ObjectId,
        ref: "Room"
    },
    body: {
        type: String
    }
},
    {timestamps: true}
)


module.exports = mongoose.model("Message", messageSchema)