require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require('./controller') 

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

// app.use(express.json());
// app.get('api/Products', controller.get);
// app.post('/api/products', controller.create);
// app.put('/api/products/:id', controller.update);
// app.delete('/api/products/:id', controller.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
