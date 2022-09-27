const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:Id').get(getUserById);

router.route('/:Id/:userId').delete(deleteUser);

module.exports = router;