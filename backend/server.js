const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.get('/health', (req, res) => {
  res.status(200).send('OK');
}   );

pool.query('SELECT 1')
.then(() => {
  console.log('DB OK');
})
.catch((err) => {
  console.error('DB Error:', err);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})