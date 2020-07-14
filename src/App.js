import React, { useEffect, useState } from "react";

import "./styles.css";
import api from './services/api';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((response) => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    await api.post('repositories', {
      id: "123",
      url: "https://github.com/josepholiveira",
      title: "Desafio ReactJS",
      techs: ["React", "Node.js"],
    }).then((response) => {
      setRepositories([...repositories, response.data])
    })
  }

  async function handleRemoveRepository(id) {
    console.log()
    await api.delete(`repositories/${id}`);
    const newRepositories = repositories.filter((item) => item.id !== id);

    setRepositories(newRepositories)
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((item) => (
          <li key={item.id}>
            {item.title}

            <button onClick={() => handleRemoveRepository(item.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
