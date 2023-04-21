import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./pages/Bar";
import Data from "./Data.json"
import './styles/app.css'
import SearchBar from "./components/SearchBar";

function App() {
  return (
   <Routes>
      <Route path="/" element ={<SearchBar data={Data}/>}/>
      <Route path="/signup" element ={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/index" element={<Index/>}/>
   </Routes>
  );
}

export default App;
