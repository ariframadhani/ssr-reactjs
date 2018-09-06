import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home';

const GenericNotFound = () => {
    return ( <h1> Not Found </h1> )
}

class App extends React.Component { 
    render(){
        return (
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route component={GenericNotFound} />
            </Switch>
        )
    }
}

export default App;