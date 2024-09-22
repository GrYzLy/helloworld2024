import './App.css';
import CounterClass from './Counter/CounterClass';
import CounterHook from './Counter/CounterHook';
import FetchApi from './FetchApi/FetchApi';
import FetchApiHook from './FetchApi/FetchApiHook';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import GrettingsClass from './Greetings/GreetingsClass';
import Lifecycle from './Lifecycle/Lifecycle';
import LoginForm from './LoginForm/LoginForm';
import Quiz from './Quiz/Quiz';
import SecretMessage from './SecretMessage/SecretMessage';

function App() {
  return (
    <div className="App" >
      {/* <Greetings name="January 2024 from props" />
      <GrettingsClass name="January 2024 from props"/>
      <GreetingsArrow name="Jan2024 from arrow" /> */}
      {/* <CounterClass /> */}
      {/* <LoginForm /> */}
      {/* <SecretMessage /> */}
      {/* <Lifecycle /> */}
      {/* <Quiz /> */}
      {/* <FetchApi /> */}
      {/* <CounterHook /> */}
      <FetchApiHook />
    </div>
  );
}



export default App;
