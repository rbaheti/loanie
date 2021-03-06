import React, { Component } from 'react';
import Navbar from './Navbar';
import ClientSideNav from './ClientSideNav';
import '../CSS/Settings.css';

export default class BorrowerSettings extends Component {
  constructor() {
    super();
    this.state = {
      email: 'johnexample@email.com',
      phoneNumber: '123-456-7890',
      password: '**************',
    };
  }
  render() {
    return (
      <div className="Settings">
        <Navbar />
        <div className="Settings-title-containter">
          <h1>Settings</h1>
        </div>
        <div className="Settings-form-container">
          <form>
            <fieldset>
              <legend>Personal information:</legend>
              <h4>Email:</h4>
              {this.state.email}<br />
              <button>Edit</button><br /><br />
              <h4>Phone Number:</h4>
              {this.state.phoneNumber} <br />
              <button>Edit</button><br /><br />
              <h4>Password:</h4>
              {this.state.password}<br />
              <button>Edit</button><br /><br />
            </fieldset>
          </form>
        </div>
        <ClientSideNav />
      </div>
    );
  }
}
