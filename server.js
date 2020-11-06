const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')

const ProjectRouter = require('./Projects/project-router');
const ResourseRouter = require('./Projects/resourse-router')
const TaskRouter = require('./Projects/task-router')

const server = express();
server.use(helmet())
server.use(morgan('dev'))


server.use(express.json());
server.use('/api/projects', ProjectRouter, ResourseRouter, TaskRouter);


server.get('/', (req,res)=>{
    res.status(200).json({message:`Server is running, better go catch it`})
});

server.get('/api', (req,res)=>{
    res.status(200).json({message:`Welcome to the api, please use an endpoint`});
});

module.exports = server;