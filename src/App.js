import React from 'react';
// import ReactDom from 'react-dom';
// import logo from './logo.svg';
import { Button, Container, Row } from 'react-bootstrap';
import './App.css';
import List from './List';
import Incdec from './Incdec';
import ApiImage from './Apiform';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
onChange=(e)=>{
  e.preventDefault();
  this.setState({
    term:e.target.value
  });
}
onSubmit=(e)=>{
e.preventDefault();
this.setState({
  term:'',
  items:[...this.state.items,this.state.term]
});
}
  render() {
    return (
      <div>
      <form className='App' onSubmit={this.onSubmit}>
      <Container>
        <Row className="justify-content-md-center">
        <input type='text' className='form-control col-sm-6' value={ this.state.term} onChange={this.onChange}/>
        <Button type='submit' variant="outline-danger">Submit</Button>
        </Row> 
      </Container>
      </form>
      <List items={this.state.items}/>
        <Incdec/>
       <ApiImage/>
       </div>
    );
  }
}
export default App;
