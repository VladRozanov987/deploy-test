import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json)
      .then(data => {
        console.log(data);
        setPosts(data);
      })
  }, []);
  
  return (
    <div className="App">
      <h1>Deploy APP</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
