import { useEffect, useState } from 'react';
import useAxios from '../utils/useAxios';

function Home() {
  const [notes, setNotes] = useState([]);
  const api = useAxios();

  useEffect(() => {
    api.get('notes/')
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  }, [api]);

  return (
    <section>
      <h1>Página inicial</h1>
      <hr />
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
