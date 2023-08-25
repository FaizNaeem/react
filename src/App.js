import logo from './logo.svg';
import './App.css';
// import cardard from './com/card';
import ResponsiveAppBar from './com/Appbar';
import Hi from './com/slider';
import Card from './com/card';

function App() {
  return (
    <div className="App">
  <ResponsiveAppBar />
  <Hi/>
  <Card />
    </div>
  );
}

export default App;
