import React from 'react';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import NoMatch from './components/NoMatch/NoMatch';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">        
        <div className="row">                  
          <div className="col">
            <Switch>
              <Route exact path="/" component={Resumo} />
              <Route path="/consultas" component={Consultas} />
              <Route path="/faturamento" component={Faturamento} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
