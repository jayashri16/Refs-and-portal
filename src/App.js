import TimerChallanges from "./components/TimerChallenge";
import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <>
    <Player/>
      <div id="chalanges">
      <TimerChallanges title ="Easy" targetTime={1}/>
      <TimerChallanges title ="Not Easy" targetTime={5}/>
      <TimerChallanges title ="Getting tough" targetTime={10}/>
      <TimerChallanges title ="Pros only" targetTime={15}/>
      </div>
    </>
  );
}
export default App;
