import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './actions/index'

 const App = () => {
  const dispatch = useDispatch()
  const myState = useSelector((state)=> state.changeUpDown)
  return (
    <>
    <div className='container'>
      <h1>Increment/Decrement counter</h1>

      <div className='quantity'>
       <button onClick={()=> dispatch(decNumber())}> <a><span>-</span></a></button>
        <input name="quantity" type="text" value={myState}></input>
       <button onClick={()=>dispatch(incNumber())}> <a><span>+</span></a></button>
      </div>
    </div>
    
    </>
  )
}
export default App