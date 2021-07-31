import './App.css';
import Counter from './THA-18/components/Counter';
import Aapp from './THA-19/Aapp'
import Header from './THA-19/components/header'


function App() {
  return (
    <div>
      <Header />
      <div className="conta">
        <Counter />
        <Aapp />
      </div>
    </div>
  );
}

export default App;
