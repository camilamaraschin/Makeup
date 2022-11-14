import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';


import Inicio from "./components/pages/Inicio";
import Maquiagem from "./components/pages/Maquiagem";
import CorpoBanho from "./components/pages/CorpoBanho";
import Perfumaria from "./components/pages/Perfumaria";
import Cadastro from "./components/pages/Cadastro";




function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/maquiagem" element={<Maquiagem />} />
            <Route path="/CorpoBanho" element={<CorpoBanho/>} />
            <Route path="/perfumaria" element={<Perfumaria />} />
            <Route path="/cadastro" element={<Cadastro/>} />
          </Routes>
        </BrowserRouter>
      

        
      

    
      
     
     
    </div>
  );
}

export default App;
