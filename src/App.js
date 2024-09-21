import './App.css';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import GrettingsClass from './Greetings/GreetingsClass';

function App() {
  return (
    <div className="App" >
      <Greetings name="January 2024 from props" />
      <GrettingsClass name="January 2024 from props"/>
      <GreetingsArrow name="Jan2024 from arrow" />
    </div>
  );
}



export default App;
