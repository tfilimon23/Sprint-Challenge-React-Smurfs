import React, { Component } from 'react';
import './SmurfForm.css'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  handleInputChange = e => {
    e.persist();
    this.setState({ 
     [e.target.name]: e.target.value
      });
    }

  addSmurf = (e) => {
    this.props.addSmurfPost(e, this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }


  // add code to create the smurf using the api


  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={(e) =>this.addSmurf(e)}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
