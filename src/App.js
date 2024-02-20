import './App.css';
import {getPosts} from './api/main.js'
import {useState , useEffect} from 'react'
import PostCard from './components/PostCard.jsx';

function App() {
  const [data , setData] = useState(null)
  useEffect(()=>{
      getPosts().then((post)=>setData(post))
  },[])

  return (
    <div className="App">
        {data ? data.map((e)=>{<PostCard title={e.title} body={e.body} />}) : <h3>No data</h3>}
    </div>
  );
}

export default App;