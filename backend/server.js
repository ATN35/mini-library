const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.get('/health', (req, res) => {
  res.status(200).send('OK');
}   );

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})