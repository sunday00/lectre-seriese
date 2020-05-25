const bcrypt = require('bcryptjs');

(async () => {
  console.log(await bcrypt.hash('jwt-secret', 12));
})();
