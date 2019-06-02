import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';

class Incdec extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
            show:true
        }
    }
    IncreamentsItem = (e)=> {
this.setState({
    clicks:this.state.clicks+1
});
    }
DecreasItem =(e)=>{
    this.setState({
        clicks:this.state.clicks-1
       
    });
    console.log(e)
}
    ToggleClick =(e)=>{
        this.setState({show:!this.state.show});
        console.log(e)
    }
    render(){
        return(
            <Container>
                <Button variant="outline-info"  onClick={this.IncreamentsItem}>Increment</Button>
                <Button variant="outline-success" onClick={this.DecreasItem}>Decreas</Button>
                <Button variant="outline-danger" onClick={this.ToggleClick}>{this.state.show?'Hide':'Show'}</Button>
                {this.state.show?<h2>{this.state.clicks}</h2>:''}
                </Container>
        )
    }
}

export default Incdec ;