const app = require('./index');
const db = app.get('db');
module.exports = {
    getUsers(req, res) {
        db.read_users([],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    getVehicles(req, res) {
        db.read_vehicles([],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    createUser(req, res) {
        db.create_user([
                req.body.firstname,
                req.body.lastname,
                req.body.email
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    createVehicle(req, res) {
        db.create_vehicle([
                req.body.make,
                req.body.model,
                req.body.year,
                req.body.ownerid * 1
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    getUserVehicleCount(req, res) {
        db.read_user_vehicle_count([
                req.params.userId
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results[0]);
                }
            });
    },
    getUserVehicles(req, res) {
        db.read_user_vehicles([
                req.params.userId
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    getUserVehiclesByEmail(req, res) {
        if (req.query.userFirstStart) {
            db.read_user_vehicles_by_letter([
                    req.query.userFirstStart + "%"
                ],
                (err, results) => {
                    if (err) {

                        return res.send(err);
                    } else {
                        return res.status(200).send(results);
                    }
                });
        } else {
            db.read_user_vehicles_by_email([
                    req.query.email
                ],
                (err, results) => {
                    if (err) {
                        console.error('ERROR', err);
                        return res.send(err);
                    } else {
                        return res.status(200).send(results);
                    }
                });
        }
    },
    getNewVehicles(req, res) {
        db.read_new_vehicles([],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    changeOwnership(req, res) {
        db.update_ownership([
          req.params.vehicleId,
          req.params.userId
        ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    deleteOwnership(req, res) {
        db.delete_ownership([
          req.params.vehicleId,
          req.params.userId
        ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    deleteVehicle(req, res) {
        db.delete_vehicle([
          req.params.vehicleId
        ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    }
}
