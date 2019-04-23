import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Projects from './Projects';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/App.css';
import '../css/react-tabs.css';
import logo from './close.png';

// ...later
class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tabs:[<Tab key='1' tabIndex="0">Hi <img src={logo} className='tabicon'/></Tab>],
        tabPanels:[<TabPanel key='1'> <div > <Projects /> </div> </TabPanel>],
      };
  }
  selectTab = (x)=>{
    console.log('selected',x);
  }
  pushTab = () =>{

    this.setState(state =>{
    const tabs = state.tabs.concat(<Tab key='2'
    tabIndex="1">
    Hello
    </Tab>);
    const tabPanels= state.tabPanels.concat(
        <TabPanel key='2'> <div > <Projects />  </div> </TabPanel>
    );
    console.log(this.proe);
    return{tabs,tabPanels};
  });

  };

  render() {
    let styles={
      paddingTop:50
    }
    console.log('renderering');
    return (
      <div>
            <div className="headermnu">
            <MenuBar />
            </div>
            <div  className="tab-container" style={styles}>
            <button onClick={this.pushTab}>hello </button>
            <Tabs defaultIndex={1} onSelect={index =>this.selectTab(index)}>
            <TabList>{this.state.tabs}</TabList>
              {this.state.tabPanels}
            </Tabs>
            </div>

        </div>
	  );
  }
}
export default App;
