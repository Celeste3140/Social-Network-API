const userSchema = new Schema ({
username: {},
email: {},
thoughts: {
},
friends: {}
})

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

module.exports = User;