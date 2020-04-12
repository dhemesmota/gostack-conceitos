const { Router } = require('express');
const { uuid, isUuid } = require('uuidv4');

const route = Router();

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}

route.use(logRequests)

route.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
});

route.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.unshift(project);

  return response.json(project);
});

route.put('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ "error": "Project not found." });
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;
  
  return response.json(project);
});

route.delete('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ "error": "Project not found." });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

module.exports = route;