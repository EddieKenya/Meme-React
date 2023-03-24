import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import './styles/app.css'

function App() {
  return (
   <Routes>
      <Route path="/signup" element ={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
   </Routes>
  );
}

export default App;
