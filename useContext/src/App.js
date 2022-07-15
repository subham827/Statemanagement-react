
import './App.css';
import { CartState } from './Context/Context';

function App() {
  const { state, dispatch } = CartState();
  return (
   <>
   <div className='container'>
      <h1>Increment/Decrement counter</h1>

      <div className='quantity'>
       <button onClick={()=> {dispatch({type: "DECREMENT"})}}> <a><span>-</span></a></button>
        <input name="quantity" type="number" value={state} ></input>
       <button onClick={()=> {dispatch({type : "INCREMENT"})}}> <a><span>+</span></a></button>
      </div>
    </div>
   </>
  );
}

export default App;
