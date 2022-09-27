const { Thought, User } = require('../models');

const thoughtController = {
    
    getAllThoughts(req, res) {
        Thought.find({})
            .then((Thought) => res.json(Thought))
            .catch((err) => res.status(500).json(err));
},

    getThoughtById (req, res) {
    Thought.findOne({_id: params.id })
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

deleteCourse(req, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: Thought.id } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

};