import { useState } from 'react';
import './App.css';


function App() {
  const [churros,setChurros] = useState(0)
  const [name, setName] = useState("")

  const onSubmitChurros = () => {
    return "Tijubina Produz Churros quentes"
  }

  return (
    <div className="App">
      <div className='RealSinglePageAplication'>
        <div className='MasterCentralApp'>
          <h2>COmpRe AgOr4</h2>
          <h3>M4$ter ChurRu$</h3>
          <div className='BOXIMPORTANTE'>
            <input placeholder='Name' onChange={(e)=> setName(e.target.value)}/>
            <button onClick={()=> setChurros(churros +1)}>
              +
            </button>
            <p>{churros}</p>
            <button onClick={()=> setChurros(churros -1)}>
              -
            </button>
            <button onClick={()=> onSubmitChurros}>CHURRUS !</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
