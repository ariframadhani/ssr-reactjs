import React from 'react'
import { Helmet } from 'react-helmet'

class Home extends React.Component { 

    check () {
        return this.props.history.push('/haha')
        
    }

    head() {
        return (
            <Helmet>
                <title> Rendered </title>
            </Helmet>
        )
    }

    render(){
        return ( 
            <div> 
                <h3> Routing </h3>
                {this.head()}
                <button onClick={(e) => this.check()}> show console log </button>
            </div> 
        )
    }
}

export default Home;