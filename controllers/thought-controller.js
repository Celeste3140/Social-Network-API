const { Thought, User } = require('../models');

const thoughtController = {
    
    getAllThoughts(req, res) {
        Thought.find({})
            .then((Thought) => res.json(Thought))
            .catch((err) => res.status(500).json(err));
},

    getThoughtById (req, res) {
    Thought.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((Thought) =>
      !Thought
        ? res.status(404).json({ message: 'No Thought with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

createThought(req, res) {
    Thought.create(req.body)
      .then((Thought) => res.json(Thought))
      .catch((err) => res.status(500).json(err));
  },

};
