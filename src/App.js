import { 
  // CounterApp,
  CounterWithCustomHook 
} from './01-useState';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 mt-5">
          <h1>Hooks App</h1>
          <hr />


          {/*Components here!*/}
          <CounterWithCustomHook />



        </div>
      </div>
    </div>
  );
}

export default App;
