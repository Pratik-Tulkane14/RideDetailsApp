import MainNavbar from "./Components/Navbar/Main_Navbar/MainNavbar";
import NearestRides from "./Components/Navbar/SubNav/NearestRides/NearestRides";
import SubNavbar from "./Components/Navbar/SubNavbar/SubNavbar";
import PastRide from "./Components/Navbar/SubNav/PastRide/PastRide";
import UpcommingRide from "./Components/Navbar/SubNav/UpcommingRide/UpcommingRide";
import {
  BrowserRouter as Router,
  Routes,
  Route ,
} from "react-router-dom";
function App() {
  

  return (
    <>  
    <div className="App">
     <Router>
     <MainNavbar/>
     <SubNavbar/>
          <Routes>
          <Route path="/nearestride" element={ <NearestRides />}/>
           <Route path="/upcommingrides" element={ <UpcommingRide />}/> 
             <Route path="/pastrides" element={ <PastRide />}/>
          </Routes>
        </Router> 
       </div>
    </>
  );
  }

export default App;