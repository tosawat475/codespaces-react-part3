import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Shop from './Shop';

function App() {
  return (<BrowserRouter>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/posts?fname=tosawat&lname=jantarasorn">Post Greeting</Link></li>
      <li><Link to="/posts/1">Post ID 1</Link></li>
      <li><Link to="/posts/2">Post ID 2</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/posts/:id' element={<Posts/>}/>

    </Routes>
  </div>
  </BrowserRouter>);
}
export default App;
