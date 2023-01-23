import './App.css';
import { React, Routes, Route } from 'react-router-dom';
import MyKitchen from './Components/MyKitchen';
import NavbarFunc from './Components/Navbar';
import CreateRec from './Components/CreateRecipe';
import CreateIng from './Components/CreateIng';
import GetRec from './Components/Recipes';
function App() {
  return (
    <div className="App">
      <NavbarFunc />
      <Routes>
        <Route path="/" element={< MyKitchen />} />
        <Route path="/createrec" element={<CreateRec />} />
        <Route path="/createing" element={<CreateIng />} />
        <Route path="/rec" element={<GetRec />} />
      </Routes> 
    </div>
  );
}

export default App;
