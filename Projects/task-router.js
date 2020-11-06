const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/tasks', (req, res) => {
    Tasks.find()
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get Tasks' });
      });
  });

  router.post('/tasks', (req, res) => {
    const task = req.body;
  
    Tasks.add(task)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  });






  module.exports = router;
