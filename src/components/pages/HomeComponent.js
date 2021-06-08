import React, { Component } from 'react'
import DataFetching from './DataFetching'
import DataFetchingTwo from './DataFetchingTwo'

 class HomeComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name :' Owns Stark Industry'
         }

     }
      changeHandler = () =>{
        this.setState({
            name:'state changed'
        })
     }
    render() {
        return (
            <div style={{margin:20,fontSize:20,alignItems:'center',justifyContent:'center'}}>
                <h2 >{this.state.name}</h2>
                <button onClick={this.changeHandler}>Change State</button>
                {/* <DataFetching/> */}
                <DataFetchingTwo />
            </div>
        )
    }
}

export default HomeComponent
