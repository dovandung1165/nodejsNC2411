const service = require('./users.service');

const getUsers = (req, res, next) => {
    return service.getUsersFile()
        .then(data => JSON.parse(data))
        .then(usersAll => usersAll.body)
        .then(users => res.render('users', { users }))
        .catch(err => {
            console.error('Fail to getUsers', err);
            next(err);
        })
};

// getUsers();

module.exports = { getUsers };