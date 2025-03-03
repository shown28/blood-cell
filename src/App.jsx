import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Requests from "./pages/Requests";
import VoluntaryDonors from "./pages/VoluntaryDonors"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/voluntary-donors" element={<VoluntaryDonors />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
