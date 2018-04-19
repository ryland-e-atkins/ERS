'use strict';

module.exports = function (app, db) {
    // GET all users
    app.get('/users', (req, res) => {
        db.users.findAll()
            .then(users => {
                res.json(users);
            });
    });
    // GET one user by id
    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
        db.users.find({
            where: { ERS_USERS_ID: id }
        })
            .then(user => {
                res.json(user);
            });
    });
    /*
    // POST single owner
    app.post('/user', (req, res) => {
        const name = req.body.name;
        const role = req.body.role;
        db.owners.create({
            name: name,
            role: role
        })
            .then(newOwner => {
                res.json(newOwner);
            });
    });
    // PATCH single owner
    app.patch('/owner/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.owners.find({
            where: { id: id }
        })
            .then(owner => {
                return owner.updateAttributes(updates);
            })
            .then(updatedOwner => {
                res.json(updatedOwner);
            });
    });
    // DELETE single owner
    app.delete('/owner/:id', (req, res) => {
        const id = req.params.id;
        db.owners.destroy({
            where: { id: id }
        })
            .then(deletedOwner => {
                res.json(deletedOwner);
            });
    });*/
}