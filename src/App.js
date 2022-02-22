import React from 'react'
import  GlobalStyle  from './styles/global';
import {Container} from './styles'
import Upload from './components/upload'

function App() {
  return (
    <div className="App">
        <Container>
          
             <Upload />
         
        </Container>
        
        <GlobalStyle />
    </div>
  );
}

export default App;
