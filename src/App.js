import logo from './logo.svg';
import './App.css';
import Tempapp from './components/Tempapp';
function App() {
  return (
    <div className="App">
      <Tempapp/>
    </div>
  );
}

export default App;

//api.openweathermap.org/data/2.5/weather?q={city name}&appid=ff1ee767a150b4ecee982e991a3e9ef1