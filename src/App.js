import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPages from "./pages/adminpages/AdminPages";
import LandingPages from "./pages/landingPages/LandingPages";
import SignIn from './pages/signinpages/SignIn'
import PlanningPages from "./pages/planningPages/PlanningPages";
import TarifPages from "./pages/tarifPage/TarifPages";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path="/" element=<LandingPages /> />
        <Route path="/admin" element=<AdminPages /> />
        <Route path="/signin" element=<SignIn/> />
        <Route path="/PlanningPages" element=<PlanningPages/>/>
        <Route path="/TarifPages" element=<TarifPages/> />
        
       
      
        </Routes>
    </div>
  );
}

export default App;
