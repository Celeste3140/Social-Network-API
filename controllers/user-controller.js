const { Thought, User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
            .then((User) => res.json(User))
            .catch((err) => res.status(500).json(err));
    },
    getUsersById(req, res) {
        Users.findOne({ _id: params.id })
            .select('-__v')
            .then((dbUsers) =>
                !Thought
                    ? res.status(404).json({ message: 'No Users with that ID' })
                    : res.json(dbUser)
            )
            .catch((err) => res.status(500).json(err));
    },
};