import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
        <Greet name="Sharad" gender="Male">
          <button>He is the father</button>
        </Greet>
        <Greet name="Jahanvi" gender="Female"/>
        <Greet name="Jaini" gender="Female">
          <p>She is the child character.
            <button>Little Hanuman.</button>
          </p>
        </Greet>

        <Welcome name="Sharad" gender="Male">
        <button>He is the father</button>
        </Welcome>
        <Welcome name="Jahanvi" gender="Female">
          <label>She is the mother.</label>
        </Welcome>
        <Welcome name="Jaini" gender="Female"/>
    </div>
  );
}

export default App;
