import './App.css';
import {getPosts} from './api/main.js'
import {useState , useEffect} from 'react'

function App() {
  const [data , setData] = useState(null)
  useEffect(()=>{
      getPosts().then((post)=>setData(post))
  },[])

  return (
    <div className="App">
        {data ? data.map((e)=><p className='obj'>{e.title}</p>) : <h3>No data</h3>}
    </div>
  );
}

export default App;