import Key from './components/Key';
import './index.css';

function App() {
  return (
    <div className="App">
      <Key number="1" rotate="59deg"/>
      <Key number="2" rotate="-47deg"/>
      <Key number="3" rotate="35deg"/>
      <Key number="4" rotate="-22deg"/>
      <Key number="5" rotate="7deg"/>
    </div>
  );
}

export default App;
