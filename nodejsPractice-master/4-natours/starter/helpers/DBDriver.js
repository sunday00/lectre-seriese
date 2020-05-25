module.exports = class DBDriver {
  constructor(conf) {
    this.conf = conf;
  }

  conn = () => {
    return `${this.conf.DBDRIVER}://${this.conf.DBUSER}:${this.conf.DBPASS}@${this.conf.DBHOST}:${this.conf.DBPORT}/${this.conf.DBNAME}`;
  };
};
