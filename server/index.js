const express = require('express');
const routes = require('./routes');
const { connect } = require('./config/database');

const app = express();
const port = 4000;

connect();

app.use(express.json());
app.use('/api',routes);

app.get('/', (req, res) => {
  res.send('Hello Welcome to Erino Server Running on port 4000');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});