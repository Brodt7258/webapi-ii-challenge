const express = require('express');
const postRoutes = require('./postRoutes');

const app = express();

app.use(express.json());
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send({ test: 'server is up' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});