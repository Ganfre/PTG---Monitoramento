import React from 'react';
import PageHome from './paginas/pageHome';

// const Teste = ()=>{
//   fetch('/api')
//   .then(resultado =>{
//     console.log(resultado)
//   })
// }

function App(){
  return(
    <div>
      {/* {Teste()} */}
      <h1>Olá mundo!</h1>
      <PageHome />
    </div>
  ) 
}

export default App 