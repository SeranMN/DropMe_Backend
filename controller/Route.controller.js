const Route = require('../model/Route');

const addRoute = async(req,res) => {
    if (req.body) {
 
        let user = new User(req.body)
        user.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllRoutes = async (req, res) => {
    await User.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

module.exports = {
    addRoute,
    getAllRoutes,
}