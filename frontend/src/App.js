import React from 'react';

const Teste = ()=>{
  fetch('/api')
  .then(resultado =>{
    console.log(resultado)
  })
}

function App(){
  return(
    <div>
      {Teste()}
      <h1>Olá mundo!</h1>
    </div>
  ) 
}

export default App 