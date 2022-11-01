const User = require('../model/User');

const addUser = async(req,res) => {
    if (req.body) {
 
        let user = new User(req.body)
        user.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllUsers = async (req, res) => {
    await User.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}
const getUserById = async (req, res) => {
    await User.findOne({ NIC: req.params.id })
        .then((data) => { res.status(200).send(data) })
        .catch((err) => res.status(500).send(data))
    
}
const updateAccount = async (req, res) => {
    await User.findOneAndUpdate({ NIC: req.params.id }, req.body)
    .then((data) => { res.status(200).send(data) })
        .catch((err) => res.status(500).send(data))
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateAccount
}