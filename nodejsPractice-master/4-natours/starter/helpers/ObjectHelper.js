module.exports = class ObjectHelper {
  static filter = (obj, ...allowed) => {
    const filtered = {};
    Object.keys(obj).forEach(v => {
      if (allowed.includes(v)) filtered[v] = obj[v];
    });
    return filtered;
  };

  static toPascalCase = (sentence, divider = ' ', newDivider = '') => {
    let replaced = '';
    sentence.split(divider).forEach(w => {
      replaced += w[0].toUpperCase() + w.slice(1).toLowerCase() + newDivider;
    });
    return replaced.slice(0, -1);
  };

  static getSerial = req => {
    if (req.params && req.params.rid) return req.params.rid;
    if (req.body && req.body.rid) return req.body.rid;
    if (req.queryString && req.queryString.rid) return req.queryString.rid;
    if (req.params && req.params.id) return req.params.id;
    if (req.body && req.body.id) return req.body.id;
    if (req.queryString && req.queryString.id) return req.queryString.id;
  };
};
