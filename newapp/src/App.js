import logo from './logo.svg';
import './App.css';
import './counter.js'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className = "app">
    <Header/>
    <Route path ="/", element={<PageRepos/>}>
    </Routes>
   </div>

  );
}

export default App;
