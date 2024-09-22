import './App.css';
import CounterClass from './Counter/CounterClass';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import GrettingsClass from './Greetings/GreetingsClass';
import LoginForm from './LoginForm/LoginForm';

function App() {
  return (
    <div className="App" >
      {/* <Greetings name="January 2024 from props" />
      <GrettingsClass name="January 2024 from props"/>
      <GreetingsArrow name="Jan2024 from arrow" /> */}
      {/* <CounterClass /> */}
      <LoginForm />
    </div>
  );
}



export default App;
