const response = require('./responses/responses');

exports.getUsers = (req, res)=>{
  try {
    response.success(req, res, 'WIP', 200, '')
  } catch (error) {
    response.error(req, res, 'failed', 400, '')
  }
}