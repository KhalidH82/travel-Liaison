// Set database in Heroku

function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return {
      database: 'travelDB',
      port: 5432,
      host: 'localhost',
    };
  } else if (process.env.NODE_ENV === 'production') {
    
    return process.env.DATABASE_URL;
  }
}

const db = setDatabase();

module.exports = db;