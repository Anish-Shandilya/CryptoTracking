import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import Watchlist from './Components/Watchlist/Watchlist';
import Login from './Components/login/login';
import SignUp from './Components/signUp/signUp';
import Privateroute from './Components/Privateroute';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import './App.css';


const App = () =>{

  

  return (
    <div >
      <Header/>
      
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
      
          <Route path="/signup" element={<SignUp />} />
            
          <Route path="/user" element={<Privateroute />} >
            <Route path="data" element={<Body />} />
            <Route path="selecteddata" element={<Watchlist />} />
          </Route>

        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
