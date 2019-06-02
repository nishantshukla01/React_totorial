import React , { Component } from 'react';
import './App.css';
class ApiImage extends Component{
constructor(props){
    super(props);
    this.state ={
        term:'',
        img:''
    };
}
onCange=(event)=>{
this.setState({
    term:event.target.value
});
}
handleSubmit=(event)=>{
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>this.setState({term:'',img:data.data[0].images.fixed_height.url}))
    .then(e=>console.log('error',e));
}
render(){
    return(
        <div className='App'>
            <form onSubmit={this.handleSubmit}>
<input value={this.state.term} onChange={this.onCange}/>
<button type='submit'>Save</button>
</form>
<img src={this.state.img} height="200" alt={this.state.term}/>
    </div>
    );
}
}
export default ApiImage;