import React, { Component } from 'react';
import './Tab1.css';

class Tab extends Component {
state = {
        activeTab: 0
    };


    handleClick(id, event) {
        this.setState({
            activeTab: id - 1
        });
    }

    render() {
      const tabs = [
        <p>
            кривые табы - а времени норм сделать нет :( 
        </p>,
        <p>
            about education and skils
        </p>,
        <p>
            kakie-to kontakty
        </p>
      ]
    return (
      <div className="TabControl">
				<input id="tab_1" type="radio" name="tabs" checked></input>
                <label onClick={this.handleClick.bind(this, 1)} data-id="1" for="tab_1">About</label>

                <input id="tab_2" type="radio" name="tabs" ></input>
                <label onClick={this.handleClick.bind(this, 2)} data-id="2" for="tab_2">Education</label>

                <input id="tab_3" type="radio" name="tabs" ></input>
                <label onClick={this.handleClick.bind(this, 3)} data-id="3" for="tab_3">Contacts</label>

                <section  id ="tab_1" data-id="0">
                    {tabs[this.state.activeTab]}
                </section>
                <section onClick={this.handleClick} id ="tab_2" >
        
                </section>
                <section onClick={this.handleClick} id ="tab_3" data-id="2">
            
                </section>
      </div>
    );
  }
}

export default Tab;