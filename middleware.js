var cryptojs = require ('crypto-js');
module.exports = function (db) {

	return {
		requireAuthentication: function (req, res, next) {
			var token = req.get('Auth') || '';
			// looking for a token in the db created via login
			db.token.findOne({
				where: {
					// value of tokenHash is the hashed value of whatever the user has set 
					// as their Auth header
					tokenHash: cryptojs.MD5(token).toString()
				}
				// if we do find the above 
			}).then(function (tokenInstance) {
				if (!tokenInstance) {
					throw new Error();
				}
				// successful tokenInstance we store it onto the request object and
				// keep chain alive by returning the call findByToken
				req.token = tokenInstance;
				return db.user.findByToken(token);
			}).then(function (user) {
				// if everything went well with return above
				// we set the user object onto the request obj and call next 
				req.user = user;
				next();
			}).catch(function () {
				res.status(401).send();
			});
		}
	};

};