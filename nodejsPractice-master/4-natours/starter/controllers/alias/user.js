module.exports = class Alias {
  recent5 = async (req, res, next) => {
    req.query.limit = 5;
    req.query.sort = '-created_at';
    req.query.fields = 'name,email,photo';
    next();
  };
};
