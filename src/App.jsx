import Box from "./components/box";
import Display from "./components/display";
function App() {
  return (
    <div
      id="drum-machine"
      className="container vh-40 bg-info-subtle border border-black rounded"
    >
      <div className="row-12 d-flex justify-content-center align-items-center">
        <Box />
        <Display />
      </div>
    </div>
  );
}

export default App;
