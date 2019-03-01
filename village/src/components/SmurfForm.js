import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      this.setState({smurfs: res.data});
      this.props.history.push("/");
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

      // add code to create the smurf using the api

  handleInputChange = e => {
    e.persist();
    this.setState({ 
     [e.target.name]: e.target.value
      });
    }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
