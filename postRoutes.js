const express = require('express');
const db = require('./data/db');

const router = express.Router();

console.log('import');

router.get('/', (req, res) => {
  res.status(200).json({
    test: 'router is working'
  });
});

router.get('/posts', (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ error: "The posts information could not be retrieved." });
    });
});

router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "The post information could not be retrieved." });
    });
});

router.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  db.findPostComments(id)
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "The comments information could not be retrieved." });
    })
});

module.exports = router;