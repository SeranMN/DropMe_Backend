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

const editRoute = async (req, res) => {
    console.log(req.params.id, req.body)
    if (req.body) {
        let id = req.params.id;
        await Route.findByIdAndUpdate(id, req.body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

const deleteRoute = async (req, res) => {
    await Route.findOneAndDelete(req.params.id)
        .then(() => res.status(200).send('Successfully Deleted'))
        .catch((err) => { res.status(500).send(err) })
}


module.exports = {
    addRoute,
    getAllRoutes,
    editRoute,
    deleteRoute

}