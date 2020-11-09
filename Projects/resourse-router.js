const express = require('express');

const Resourse = require('./resourse-model.js');

const router = express.Router();

router.get('/resourses', (req, res) => {
    Resourse.find()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
  });

  router.post('/resourses', (req, res) => {
    const resourse = req.body;
  
    Resourse.add(resourse)
      .then(resourse => {
        res.status(201).json(resourse);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  });



  module.exports = router;
