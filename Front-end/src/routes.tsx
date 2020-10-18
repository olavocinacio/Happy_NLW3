import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes(){
    return(
       <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={Landing}/> 
                <Route path ="/app" component={OrphanagesMap}/> 
            </Switch>
       </BrowserRouter>
    ); //path = rota; exact -> Busca o caminho exato; Switch, renderiza uma página por vez
}

export default Routes;