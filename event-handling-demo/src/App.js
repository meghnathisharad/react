import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassComponentClick from './components/ClassComponentClick';
function App() {
  return (
    <div className="App">
      <ClassComponentClick/>

      <FunctionClick/>
    </div>
  );
}

export default App;
