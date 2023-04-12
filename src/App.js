import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./pages/Bar";
import './styles/app.css'

function App() {
  return (
   <Routes>
      <Route path="/" element ={<Navbar/>}/>
      <Route path="/signup" element ={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/index" element={<Index/>}/>
   </Routes>
  );
}

export default App;
