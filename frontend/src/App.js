import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageHome from './paginas/PageHome';
import EstilosGlobais from './componentes/EstilosGlobais';
import Medidas from './paginas/Medidas';
import Admin from './paginas/Admin';
import Mensagens from './paginas/Mensagens';
import Menu from './componentes/Menu';

function App(){
  return(
    <Router>
      <EstilosGlobais />
      <Menu />
      <Routes>
        <Route path='/' element= {<PageHome />} />
        <Route path='/medidas' element= {<Medidas />} />
        <Route path='/admin' element= {<Admin />} />
        <Route path='/mensagens' element= {<Mensagens />} />
      </Routes>
    </Router>
  ) 
}

export default App 