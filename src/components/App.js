import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Projects from './Projects';
import PropTypes from 'prop-types';
import Tabs, { Tab } from './react-awesome-tabs';
import '../css/App.css';
import '../css/react-awesome-tabs.scss';
import logo from './close.png';

// ...later
class App extends Component {

  tabs = [];

  handleTabSwitch(active) {
  		this.setState({ activeTab: active });
  	}

  handleTabPositionChange(a, b) {
    		let c = this.tabs[a];
    		this.tabs[a] = this.tabs[b];
    		this.tabs[b] = c;

    		if(this.state.activeTab === a) {
    			this.setState({ activeTab: b });
    		}else if(this.state.activeTab === b) {
    			this.setState({ activeTab: a });
    		}
    		this.forceUpdate()
  }

  handleTabClose(index) {
		this.tabs.splice(index, 1);

		if(this.state.activeTab >= this.tabs.length) {
			this.setState({ activeTab: this.tabs.length - 1 });
		}
		this.forceUpdate();
	}

  handleTabAdd() {
		this.tabs.push({
			title: 'New Tab',
			content:  <Projects />
		});

		this.setState({
			activeTab: this.tabs.length - 1
		});
	}
  constructor(props) {
      super(props);

      this.state = {
			activeTab: 0
		  };

  }

  render() {
    let styles={
      paddingTop:50,
      paddingBottom:200
    }
    return (
      <div>
            <div className="headermnu">
            <MenuBar />
            </div>
            <div  className="tab-container" style={styles}>
            <Tabs
            				active={ this.state.activeTab }
            				onTabSwitch={ this.handleTabSwitch.bind(this) }
            				onTabPositionChange={ this.handleTabPositionChange.bind(this) }
            				onTabClose={ this.handleTabClose.bind(this) }
            				onTabAdd={ this.handleTabAdd.bind(this) }
            				draggable={ true }
            				showAdd={ true }
            >
            				{
            					this.tabs.map((value, index) => {
            						return(
                          <Tab key={ index } title={ value.title } showClose={ true }>
                          { value.content } </Tab>
                        );
            					})
            				}
            </Tabs>


            {/*
            <button onClick={this.pushTab}>hello </button>

            <Tabs defaultIndex={1} onSelect={index =>this.selectTab(index)}>
            <TabList>{this.state.tabs}</TabList>
              {this.state.tabPanels}
            </Tabs> */}
            </div>

        </div>
	  );
  }
}
export default App;
