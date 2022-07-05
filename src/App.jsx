import './App.css';

function App() {
  const posts = [
    {id: 1, title: 'First'},
    {id: 2, title: 'Second'},
    {id: 3, title: 'Third'},
    {id: 4, title: 'Four'},
  ]
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
