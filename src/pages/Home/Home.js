// Hola mundo

import * as React from 'react';
import Card from '../../components/Card/Card';

import './Home.style.css';

const Home = () => {
  const [CharactersList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    const list = fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then((Response) => Response.json())
      .then((data) => setCharacterList(data.results))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section className="container___list">
        <ul className="list">
          {CharactersList.map((character) => (
            <li key={character.id}>
              <Card character={character} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
