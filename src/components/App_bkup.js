import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Projects from './Projects';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/App.css';
import '../css/react-tabs.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tabs:[<Tab>Hi</Tab>],
        tabPanels:[<TabPanel > <div > <Projects /> </div> </TabPanel>],
      };
  }

  pushTab = () =>{
    alert('inside pushtab');
    this.setState(state =>{
    const tabs = state.tabs.concat(<Tab>Hello</Tab>);
    const tabPanels= state.tabPanels.concat(
        <TabPanel > <div > <Projects />  </div> </TabPanel>
    );
    return{tabs,tabPanels};
  });

  };

  render() {
    let styles={
      paddingTop:50
    }
    return (
      <div>
            <div className="headermnu">
            <MenuBar />
            </div>
            <div  ClassName="tab-container" style={styles}>
            <button onClick={this.pushTab}>hello </button>
            <Tabs>
            <TabList>{this.state.tabs}</TabList>
              {this.state.tabPanels}
            </Tabs>
            </div>

        </div>
	  );
  }
}
export default App;
