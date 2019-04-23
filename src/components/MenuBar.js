import React, { Component } from "react";
import '../css/App.css';

class MenuBar extends Component {
  constructor(props) {
        super(props);
        this.state={isToggleOn:false,
                    mnuHome:'select',
                    mnuProj:'none',
                    mnuTeam:'none',
                    mnuPlan:'none',
                    mnuRepo:'none'
                     };
  }
  flipBurger = e =>{
      this.setState({
        isToggleOn : !this.state.isToggleOn});
  }
  flipMenu = e =>{
      const item = e.currentTarget.textContent;
      this.setState({
        mnuHome:'none',
        mnuProj:'none',
        mnuTeam:'none',
        mnuPlan:'none',
        mnuRepo:'none'
      });

      switch (item) {
        case 'Home':
        this.setState({
          mnuHome:'select',
        });
        break;
        case 'Projects':
        this.setState({
          mnuProj:'select',
        })

        ;
        break;
        case 'Team':
        this.setState({
          mnuTeam:'select',
        });
        break;
        case 'Planner':
        this.setState({
          mnuPlan:'select',
        });
        break;
        case 'Reports':
        this.setState({
          mnuRepo:'select',
        });
        break;
        default:
      }
  }
  render() {
    const burgerToggle = this.state.isToggleOn ? "active" : "close";
    return (
      <div className="container">
        <div className="navbar-left">
          <div className="burger">
          <div id="burgerbtn" className={burgerToggle} onClick = {this.flipBurger} >
              <span></span>
              <span></span>
              <span></span>
          </div>
          </div>
        </div>
        <div className="brand">OSCAR</div>
        <div className="navbar-right">
          <div className="mnubar">
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuHome}>Home</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuProj}>Projects</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuTeam}>Team</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuPlan}>Planner</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuRepo}>Reports</span></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuBar;
