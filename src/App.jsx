import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Requests from "./pages/Requests";
import VoluntaryDonors from "./pages/VoluntaryDonors"
import Admin from "./pages/Admin/Admin";
import Pnf from "./pages/pnf";

function App() {
  return (
    <>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/voluntary-donors" element={<VoluntaryDonors />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<Pnf/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
