const { Schema, Types, models } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Data,
        default: Date.now
    }
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;