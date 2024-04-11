import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from './paginas/PageHome';
import EstilosGlobais from './componentes/EstilosGlobais';
import Medidas from './paginas/Medidas';
import Admin from './paginas/Admin';
import Mensagens from './paginas/Mensagens';
import Menu from './componentes/Menu';
import DetalhesDevice from './componentes/DetalhesDevices';
import { SignupForm, LoginForm } from './componentes/autenticacao/Autenticacao';
import Logout from './paginas/Logout';
//import { enviarEmailAlerta } from './componentes/EnvEmail';
//import {useApi} from './hooks/useApi';

function App() {
  //const {data} = useApi('/devices')
  return (
    <Router>
      {/* {data?.data?.message?.map(projeto =>{
                return(
                    enviarEmailAlerta(projeto)
                )
        })} */}
      <EstilosGlobais />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px' }}> 
          <Menu />
        </div>
        <div style={{ flex: 1, height: '100%' }}>
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/medidas' element={<Medidas />} />
            <Route path='/medidas/:id' element={<DetalhesDevice />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/mensagens' element={<Mensagens />} />
            <Route path='/cadastro' element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
