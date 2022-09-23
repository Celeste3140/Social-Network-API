const thoughtSchema = new Schema ({
    thoughtText: {
    },
    createddAt: {},
    username: {},
    reactions: {},
})

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

module.exports = Thought;