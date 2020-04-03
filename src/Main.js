import React from 'react';
import {
  Route,
  BrowserRouter,
  NavLink,
  Switch
} from "react-router-dom";
import {IntlProvider} from "react-intl";
import messages from "./messages";
import {FormattedMessage} from "react-intl";

import "./Main.css"

import Home from "./Routes/Home";
import Portfolio from "./Routes/Portfolio";
import AboutMe from "./Routes/AboutMe";
import StudentLife from "./Routes/StudentLife";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }

  changeLang = () => {
    var lang = localStorage.getItem("lang");
    if(lang === "es"){
      localStorage.setItem("lang", "en")
      this.setState({lang: "en"})
    }else{
      localStorage.setItem("lang", "es")
      this.setState({lang: "es"})
    }
  }

  updateDimensions = () => {
      this.setState({width: window.innerWidth, height: window.innerHeight });
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }


  render(){
    var widthFunct = (number) =>{
      if(number === 1){
        return(6.2 + Math.round(parseInt(this.state.width)/200))
      }else if(number === 2){
        return(3.6 + Math.round(parseInt(this.state.width)/200))
      }else if(number === 3){
        return(1.4 + Math.round(parseInt(this.state.width)/200))
      }else if(number === 4){
        return(7 + Math.round(parseInt(this.state.width)/200))
      }
    }
    return (
      <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}>
      <div>
        <BrowserRouter>
          <div className="navBar" style={{height:(this.state.height/15)}}>
            <div className="nav-ul">
              <div style={{width:(this.state.width/widthFunct(1))}}><NavLink to="/senkar"><FormattedMessage id="nav.home"/></NavLink></div>
              <div style={{width:(this.state.width/widthFunct(2))}}><NavLink to="/portfolio"><FormattedMessage id="nav.portfolio"/></NavLink></div>
              <div style={{width:(this.state.width/widthFunct(2))}}><NavLink to="/about-me"><FormattedMessage id="nav.about_me"/></NavLink></div>
              <div style={{width:(this.state.width/widthFunct(3))}}><NavLink to="/student-life"><FormattedMessage id="nav.student_life"/></NavLink></div>
              <div style={{width:(this.state.width/widthFunct(4))}} className="p-mini" id="d-lang">
                <div onClick={this.changeLang}><FormattedMessage id="nav.lang"/></div>
              </div>
            </div>
          </div>
          <div className="mainR">
            <Switch>
              <Route exact path="/senkar" component={Home}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/about-me" component={AboutMe}/>
              <Route path="/student-life" component={StudentLife}/>
            </Switch>
          </div> 
        </BrowserRouter>    
      </div>
      </IntlProvider>
    );
  }
}

export default Main;
