const Route = require('../model/Route');

const addRoute = async(req,res) => {
    if (req.body) {
 
        let route = new Route(req.body)
        route.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllRoutes = async (req, res) => {
    await Route.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}


module.exports = {
    addRoute,
    getAllRoutes,
}