var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://postgres:postgres@localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({
        connectionString: connString
    },
    function(err, localdb) {
        db = localdb;
        app.set('db', db);

        db.user_create_seed(function() {
            console.log("User Table Init");
        });
        db.vehicle_create_seed(function() {
            console.log("Vehicle Table Init")
        });
        const controller = require('./controller');

        app.get('/api/users', controller.getUsers);
        app.get('/api/vehicles', controller.getVehicles);

        app.get('/api/user/:userId/vehiclecount', controller.getUserVehicleCount);
        app.get('/api/user/:userId/vehicle', controller.getUserVehicles);
        app.get('/api/vehicle', controller.getUserVehiclesByEmail)

        app.get('/api/newervehiclesbyyear', controller.getNewVehicles)

        app.post('/api/users', controller.createUser);
        app.post('/api/vehicles', controller.createVehicle);

        app.put('/api/vehicle/:vehicleId/user/:userId', controller.changeOwnership);

        app.delete('/api/user/:userId/vehicle/:vehicleId', controller.deleteOwnership);
        app.delete('/api/vehicle/:vehicleId', controller.deleteVehicle);

    })

app.listen('3000', function() {
    console.log("Successfully listening on : 3000")
})

module.exports = app;
