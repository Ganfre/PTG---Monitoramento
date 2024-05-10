import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from './paginas/PageHome';
import EstilosGlobais from './componentes/EstilosGlobais';
import Medidas from './paginas/Medidas';
import Admin from './paginas/Admin';
import Mensagens from './paginas/Mensagens';
import Menu from './componentes/Menu';
import Notificacao from './paginas/Notificacao';
import DetalhesDevice from './componentes/DetalhesDevices';
import { SignupForm, LoginForm } from './componentes/autenticacao/Autenticacao';
import Logout from './paginas/Logout';
//import { enviarEmailAlerta } from './componentes/EnvEmail';
//import {useApi} from './hooks/useApi';

function App() {
  const [menuRetracted, setMenuRetracted] = useState(false);
  const handleMenuToggle = (isRetracted) => {
    setMenuRetracted(isRetracted);
  };
  //const {data} = useApi('/devices')
  return (
    <Router>
      {/* {data?.data?.message?.map(projeto =>{
                return(
                    enviarEmailAlerta(projeto)
                )
        })} */}
      <EstilosGlobais />
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: menuRetracted ? '0px' : '200px' }}> 
          <Menu onMenuToggle={handleMenuToggle} />
        </div>
        <div style={{ flex: 1, height: '100%' }}>
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/medidas' element={<Medidas />} />
            <Route path='/medidas/:id' element={<DetalhesDevice />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/mensagens' element={<Mensagens />} />
            <Route path='/cadastro' element={<SignupForm />} />
            <Route path='/notificacao' element={<Notificacao />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
