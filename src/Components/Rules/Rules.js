import React, { Component } from "react";
import RulesDisplay from "../RulesDisplay/RulesDisplay"
import './Rules.css'

class Rules extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };s

  render() {
    return (
      <main>
        <RulesDisplay 
          show={this.state.show} 
          handleClose={this.hideModal}>
        </RulesDisplay>
        <div className='rules-btn-container'>
            <button className='rules-btn' type="button" onClick={this.showModal}>Rules</button>
        </div>
      </main>
    );
  }
}

export default Rules