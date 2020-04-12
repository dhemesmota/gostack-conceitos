import React, { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../services/api';

import { Container, Form, ProjectList } from './styles';

interface Project {
  id?: string;
  title: string;
  owner: string;
  newProject?: boolean;
}

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputOwner, setInputOwner] = useState<string>('');

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  const inputFocus = useCallback(() => inputRef.current?.focus() || null, []);

  async function handleAddProject(title: string, owner: string) {
    if (!title || !owner) {
      inputFocus();
      return;
    }

    const response = await api.post('projects', {
      title,
      owner,
    });

    const project: (Project) = response.data;

    setProjects([{
      ...project, newProject: true,
    }, ...projects]);
    setInputOwner('');
    setInputTitle('');
  }

  return (
    <Container>
      <ProjectList>
        <p>
          Você tem
          {' '}
          {projects.length}
          {' '}
          projetos
        </p>
        {projects?.map((project) => (
          <li key={project.id}>
            <img
              src={`https://api.adorable.io/avatars/50/${project.title}.png`}
              alt={project.owner}
            />
            <strong>{project.title}</strong>
            {project.newProject && <span>Novo</span>}
          </li>
        ))}
      </ProjectList>

      <Form>
        <h1>Adicione seus projetos</h1>
        <input
          type="text"
          placeholder="Titulo"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          ref={inputRef}
        />
        <input
          type="text"
          placeholder="Proprietário"
          value={inputOwner}
          onChange={(e) => setInputOwner(e.target.value)}
        />

        <button type="button" onClick={() => handleAddProject(inputTitle, inputOwner)}>
          Adicionar projeto
        </button>
      </Form>
    </Container>
  );
};

export default Home;
