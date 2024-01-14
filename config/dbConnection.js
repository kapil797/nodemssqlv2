const dbConfig = {
    HOST: "localhost",
    PORT: "1433",
    USER: "sa",
    PASSWORD: "K@p1l",
    DB: "nodesqldb",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    options: {
            encrypt: true, // Use this if you're on Windows Azure
            trustServerCertificate: true // Use this if you're on Windows Azure
          }
  };

module.exports = dbConfig