const { app } = require("./app.js");
const { env } = require("./config");
const { db } = require('./config/db');

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);                                                                                                                                                
});


db.query('SELECT NOW()')
  .then(res => {
    console.log('PostgreSQL connected:', res.rows[0]);
  })
  .catch(err => {
    console.error('PostgreSQL connection error:', err);
  });