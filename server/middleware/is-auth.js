const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {

    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
    if(token === 'null'){
        const error = new Error('Not Authorized');
        error.statusCode = 401;
        throw error;
    }
        decodedToken = jwt.verify(token,"Secret String Here" );
    if(!decodedToken){
        const error = new Error('Not Authorized');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
    } catch (err) {
        throw err;
    }
}