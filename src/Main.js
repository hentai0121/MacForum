import React, { Component } from "react";
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Academics from "./Academics";
import Activities from "./Activities";
import Forum from "./Forum";
import Jobboard from "./Jobboard";
import Changemac from "./Changemac";

import "./index.css";
import logo from './images/life-at-mac-logo-white-small.png'
import AccessibleOutlinedIcon from '@material-ui/icons/AccessibleOutlined';

import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {accessibility:false, colorblind: false, larger_text: false};
  }
  render() {
    var accessibility_class = "";
    if (this.state.colorblind) accessibility_class="colorblind";

    return (
      <Router>
        <div className={accessibility_class}>
          <ul className="header">
            <li>
              <img src={logo} alt="Logo" />
            </li>
            <li><NavLink exact to="/">Academics</NavLink></li>
            <li><NavLink to="/activities" activeClassName="active">Activities</NavLink></li>
            <li><NavLink to="/forum">Forum</NavLink></li>
            <li><NavLink to="/job_board">JobBoard</NavLink></li>
            <li><NavLink to="/change_mac">ChangeMac</NavLink></li>

            <li>
              <AccessibleOutlinedIcon className="AccessibleOutlinedIcon" 
                                      onClick={event => this.setState({accessibility:true})}
              />
            </li>
          </ul>

          <Dialog
            fullWidth={true}
            maxWidth='xs'
            open={this.state.accessibility}
            onClose={event => this.setState({accessibility:false})}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle id="max-width-dialog-title">Accesibility options</DialogTitle>
            <DialogContent>
              <FormControlLabel
                value="colorblind"
                checked={this.state.colorblind}
                control={<Checkbox 
                          color="secondary" 
                          onChange={event => this.setState({colorblind: event.target.checked})}
                         />}
                label="Grayscale Mode"
                labelPlacement="end"
              />
              <FormControlLabel
                value="larger_text"
                checked={this.state.larger_text}
                control={<Checkbox 
                          color="secondary" 
                          onChange={event => this.setState({larger_text: event.target.checked})}
                         />}
                label="Large Text Mode"
                labelPlacement="end"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={event => this.setState({accessibility:false})} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Academics larger_text={this.state.larger_text}/>
              </Route>
              <Route path="/activities">
                <Activities larger_text={this.state.larger_text}/>
              </Route>
              <Route path="/forum">
                <Forum larger_text={this.state.larger_text}/>
              </Route>
              <Route path="/job_board">
                <Jobboard larger_text={this.state.larger_text}/>
              </Route>
              <Route path="/change_mac">
                <Changemac larger_text={this.state.larger_text}/>
              </Route>
            </Switch>
             
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;