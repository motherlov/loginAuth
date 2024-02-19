
import './App.css';
import { BrowserRouter,Router,Route,Routes,Switch,Navigate,Redirect,
  useLocation} from 'react-router-dom';
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Home from './Component/Cms/Home/Home';
import PageNotFound from './Component/Cms/Home/404page/PageNotFound';
import CreateUser from './Component/Cms/Home/CreateUser/CreateUser';
import UpdateUser from './Component/Cms/Home/CreateUser/UpdateUser';
import SearchBar from './Component/Cms/Home/SearchBar/SearchBar';
import useCounter from './Component/CustomHook/useCounter';
import A from './Component/Props/A';
import UseRef from './Component/UseRef/UseRef';
function App() {
   const [count,Increment,Decrement] = useCounter() // custom hook  array destructure
  return (
    <div className="App">

      {/* custom hook */}
      <h1>Custom Hook </h1>
         <div>{count}</div>
     <button onClick={Increment} >Increment</button>
     <button onClick={Decrement} >Decrement</button>


    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Home/>} />
      <Route path="/user" element={<CreateUser/>} />
      <Route path="/update" element={<UpdateUser/>} />
      <Route path="/search" element={<SearchBar/>} />
      <Route path="*" element={<PageNotFound/>} />
      {/* <Route path="*" element={<Navigate to="/dashboard"/>} /> */}

      <Route path='/props' element={<A/>} />
      <Route path='/useRef' element={<UseRef/>} />
    </Routes>
    </BrowserRouter>
   
      
    </div>
  );
}

export default App;
