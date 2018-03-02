function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    // this would be the config of the DB when in development on our machines
    return {
      database: 'travelDB',
      port: 5432,
      host: 'localhost',
    };
  } else if (process.env.NODE_ENV === 'production') {
    // HEROKU sets process.env.NODE_ENV to 'production' once pushed to that env
    return process.env.DATABASE_URL;
  }
}

const db = setDatabase();

module.exports = db;