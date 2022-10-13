import { useEffect, useRef, useState } from 'react';
import { useTextSelection } from './hooks/useTextSelection';
import './App.css';

function App() {
  const numberLines = useRef<number>(3);
  const [sentence, setSentence] = useState<string>('');
  const textSelected: string = useTextSelection();

  const generateRandomWord = async (): Promise<string> => {
    const { faker } = await import('@faker-js/faker');

    const maxNumberLines = numberLines.current;
    const randomWord = faker.lorem.lines(maxNumberLines);

    return randomWord;
  };

  useEffect(() => {
    generateRandomWord().then(setSentence);
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <div className='textContainer'>
          <h1 className='sentence'>{sentence}</h1>
          <h3 className='textSelected'>{textSelected}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
