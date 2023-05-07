
import './App.scss';

import Login from './pages/login/Login';
import Home from './home/Home';
import Register from './pages/register/Register';
import Watch from "./pages/watch/Watch.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const user=true;
  return (
    <BrowserRouter>
<Routes>
 <Route path="/"
  element={user? <Home className="App" />:<Navigate to="register"/>} 
   />
   <Route path="/login"
  element={!user? <Login/>:<Navigate to = "/" />}
   />
   <Route path="/register"
  element={!user? <Register/>:<Navigate to ="/"/>}
   />
{user && (
  <>
   <Route path="/watch"
  element=<Watch/>
   />
   <Route path="/series"
  element=<Home type1="series" className="App" />
   />
   <Route path="/movies"
  element={<Home type1="movie" className="App" />}
   />
   </>
   )}
</Routes>
    </BrowserRouter>
  );
}

export default App;
