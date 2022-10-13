import './App.css';
import { useTextSelection } from './hooks/useTextSelection';

function App() {
  const textSelected = useTextSelection();

  return (
    <div className='App'>
      <h1>Tomorrow</h1>
      {textSelected}
    </div>
  );
}

export default App;
