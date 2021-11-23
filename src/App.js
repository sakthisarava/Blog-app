import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


function App() {
  const user = true;
  return (
    <Router>
    <Topbar />
    <Routes>
    <Route >
      <Route exact path='/' element={<Home/>}/>
    </Route>
    <Route >
      <Route exact path='/register' element={ user ? <Home /> : <Register/>} />
    </Route>
    <Route >
      <Route exact path='/login' element={ user ? <Home /> : <Login/>}/>
    </Route>
    <Route >
      <Route exact path='/settings' element={ user ? <Settings/> : <Register />  }/>
    </Route>
    <Route >
      <Route exact path='/post/:postId' element={<Single/>}/>
    </Route>
    <Route >
      <Route exact path='/write' element={ user ? <Write/> : <Register /> }/>
    </Route>
    </Routes>
    </Router>
  );
}

export default App;
