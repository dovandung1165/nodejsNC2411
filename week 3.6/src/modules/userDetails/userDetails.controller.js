const service = require('./userDetails.service');

const getParamsDetails = (param, req, res, next) => {
  return service.getUsersFile()
    .then(data => JSON.parse(data))
    .then(productAll => productAll.body)
    .then(body => body.find(elemet => elemet._id === param))
    .then(user => res.render('usersDetails', { user: user }))
    .catch(err => {
      console.log("Failed getProductDetails", err);
      next(err);
    })
}

module.exports = { getParamsDetails };

