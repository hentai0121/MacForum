import React, { Component } from "react";
import './index.css'
import './css/forum.css'

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Input } from "@material-ui/core";
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ErrorTwoTone } from "@material-ui/icons";

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const months = ['01', '02', '03','04','05','06','07','08','09','10','11','12',];
class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {stockData: [
                  {
                    forum_id:0,
                    title: "How can I active my McMaster email account?",
                    content: "I am in first year and just come to MAC, can anyone help me with activating my email? ",
                    author: "Amelia Zhang",
                    date: new Date('2020','07','17'),
                    type: "Enrollment",
                  },
                  {
                    forum_id:1,
                    title: "Anybody looking for a lab partner in SFWRENG 3DX4?",
                    content: "Anyone in LAB03? ",
                    author: "Anna Chung",
                    date: new Date('2020','08','26'),
                    type: "Engineering",
                  },
                  {
                    forum_id:2,
                    title: "Is there a group chat for COMPSCI 2C03?",
                    content: "Need some help from others..the course is super hard :(",
                    author: "Asahi Am",
                    date: new Date('2020','08','18'),
                    type:"Academic",
                  },
                  {
                    forum_id:3,
                    title: "Join the facebook chat if you are in Software Eng!",
                    content: "Guys! JOIN THE CHAT!! HAVE SOME FUN!! HAPPY STUDY!!!",
                    author: "Chris Mathew",
                    date: new Date('2020','08','28'),
                    type: "Engineering",
                  },
                  {
                    forum_id:4,
                    title: "About course ECON 2I03!!!",
                    content: "I plan to set up a workshop for mock interviews tutorial, anybody has any thoughs? Contact me by my email: cameliac2@mcmaster.ca",
                    author: "James Tsui",
                    date: new Date('2020','01','23'),
                    type: "Academic",
                  },
                  {
                    forum_id:5,
                    title: "Tuition Questions",
                    content: "So I passed the due date for paying my tuition..what should I do now? Would anything affect my account? ",
                    author: "Anna Chen",
                    date: new Date('2020','09','11'),
                    type: "Enrollment",
                  },
                  {
                    forum_id:6,
                    title: "Mock Interviews for Co-op students",
                    content: "I plan to set up a workshop for mock interviews tutorial, anybody has any thoughs? Contact me by my email: cameliac2@mcmaster.ca",
                    author: "Camelia Chen",
                    date: new Date('2020','10','11'),
                    type: "Co-op",
                  },
                
                ],
                  selectedStartDate:null,
                  selectedEndDate:null,
                  type: "All",
                  sort:null,
                  create_thread:false,
                  anonymous:false,
                  
                  nextID:7,
                  create_title:"",
                  create_author:"",
                  create_date:"",
                  create_type:"All",
                  create_content: "",

                  current_post: {
                    forum_id: null,
                    title: "",
                    content: "",
                    author: "",
                    type: "",
                  },
                  current_thread_state: false,
                  isTrue:false,

                };
  }
  
  chanegType(new_type) {this.setState({type:new_type});}

  submit() { 
    if (this.state.create_title.length > 0 && this.state.create_content.length>0 && this.state.create_author.length>0){
      this.setState({
      create_thread:false,
      nextID:this.state.nextID+1,
      create_title:"",
      create_author:"",
      create_type:"",
      create_content:"",
      isTrue:false,
      stockData:[...this.state.stockData,
                  {forum_id:this.state.nextID,
                    title:this.state.create_title,
                    author:this.state.create_author,
                    date: new Date(),
                    content: this.state.create_content,
                    type: this.state.create_type,
                  }],
      })
    }
  } 
  
  check_details(new_input){
    this.setState({
      current_thread_state:true,
      current_post: {title: new_input.title, author: new_input.author, content:new_input.content, type: new_input.type}
    })
  }
  update_thread(new_input){
    this.setState({
      current_post: new_input
    })
  }
  close_details(){
    this.setState({
      current_thread_state: false,
    })
  }
  anonymousonClick(){
    this.setState({
      isTrue: !this.state.isTrue,
      create_author: this.state.create_author = "Anonymous",
    })
  }

  render() {
    const classes = this.props;

    let toshow = this.state.stockData;
    if (this.state.selectedStartDate) toshow = toshow.filter(forum => (forum.date.getTime() >= this.state.selectedStartDate.getTime()));
    if (this.state.selectedEndDate) toshow = toshow.filter(forum => (forum.date.getTime() <= this.state.selectedEndDate.getTime()));
 

    if (this.state.type === "Enrollment") toshow = toshow.filter(forum=> (forum.type === "Enrollment"));
    if (this.state.type === "Academic") toshow = toshow.filter(forum=> (forum.type === "Academic"));
    if (this.state.type === "Engineering") toshow = toshow.filter(forum=> (forum.type === "Engineering"));
    if (this.state.type === "Co-op") toshow = toshow.filter(forum=> (forum.type === "Co-op"));

    if (this.state.sort ==="Most recent") toshow = toshow.sort((a,b)=> {
      return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
    }).reverse();
    
    if (this.state.sort ==="Least recent") toshow = toshow.sort((a,b)=> {
      return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
    });
    

    var title = "normal_title";
    var content = "normal_content";
    if (this.props.larger_text) {
      title = "accessibility_title";
      content = "accessibility_content";
    }

    return (
      <div>
        <div className="forum_board">
          <ul className="options">
            <li className="type">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Start date"
                  fullWidth
                  value={this.state.selectedStartDate}
                  onChange={date => this.setState({selectedStartDate:date })}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>              
            </li>
            <li className="type">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="End date"
                  fullWidth
                  value={this.state.selectedEndDate}
                  onChange={date => this.setState({selectedEndDate:date })}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>
            </li>
            <span></span>
            <li className="type">
              <FormControl fullWidth={true}>
                <InputLabel className={classes.formControl}>Category</InputLabel>
                <Select
                  value={this.state.type}                
                  onChange={event => this.setState({type:event.target.value})}
                >
                  <MenuItem value={"All"}> All</MenuItem>
                  <MenuItem value={"Academic"}> Academic</MenuItem>
                  <MenuItem value={"Engineering"}>Engineering</MenuItem>
                  <MenuItem value={"Enrollment"}>Enrollment</MenuItem>
                  <MenuItem value={"Co-op"}>Co-op</MenuItem>
                </Select>
              </FormControl>
            </li>
            <span></span>
            <li className="sort">
              <FormControl fullWidth={true}>
                <InputLabel>Sort</InputLabel>
                <Select
                  value={this.state.sort}
                
                  onChange={event => this.setState({sort:event.target.value})}
                >
                  <MenuItem value={"Most recent"}>Most recent</MenuItem>
                  <MenuItem value={"Least recent"}>Least recent</MenuItem>
                </Select>
              </FormControl>
            </li>
            <div>
              <span className="button" onClick={()=>this.setState({create_thread:true})}> 
              Create
              </span>
            </div>
            
          </ul>
          <Dialog fullWidth open={this.state.create_thread} onClose={()=>this.setState({create_thread:false,create_title:"",create_author:"",create_date:"",create_type:"All",create_content: "",})} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a new thread</DialogTitle>
                  <form>
                    <DialogContent>
                      <DialogContentText>
                        To create a new thread, please enter the information below. 
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        label="Title"
                        placeholder="Enter title"
                        margin="normal"
                        onChange={(event)=> this.setState({create_title:event.target.value})}
                        value={this.state.create_title}
                        fullWidth 
                      />
                      <Divider/>
                      <TextField
                        required
                        disabled={this.state.isTrue}
                        label="Author"
                        placeholder="Enter name"
                        margin="normal"
                        fullWidth
                        onChange={(event)=> this.setState({create_author:event.target.value})}
                        value={this.state.create_author}
                      />
                      <Divider/>
                      <TextField
                          label="Content"
                          placeholder="Enter content"
                          fullWidth
                          required
                          multiline
                          rows={4}
                          margin="normal"
                          onChange={(event)=> this.setState({create_content:event.target.value})}
                          value={this.state.create_content}
                        />
                      <Divider/>
                      <FormControl className={classes.formControl} fullWidth={true} margin="normal">
                        <InputLabel>Category</InputLabel>
                        <Select
                          value={this.state.create_type}                
                          onChange={event => this.setState({create_type:event.target.value})}
                        >
                          <MenuItem value={"All"}> All</MenuItem>
                          <MenuItem value={"Academic"}> Academic</MenuItem>
                          <MenuItem value={"Engineering"}>Engineering</MenuItem>
                          <MenuItem value={"Enrollment"}>Enrollment</MenuItem>
                          <MenuItem value={"Co-op"}>Co-op</MenuItem>
                        </Select>
                      </FormControl>

                      <Checkbox margin="normal"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        color="primary"
                        checked={this.state.isTrue}
                        onChange={this.anonymousonClick.bind(this)}
                      />
                      Anonymous
                    </DialogContent>
                    <DialogActions>
                    <Button variant="outlined" onClick={()=>this.setState({create_thread:false,create_title:"",create_author:"",create_date:"",create_type:"All",create_content: "",})} color="primary">
                      Cancel
                    </Button>
                    <Button className="blue_heavy_background" variant="contained" type="submit" onClick={this.submit.bind(this)} color="primary">
                      Submit 
                    </Button>
                  </DialogActions>
                  </form>
          </Dialog>

          <Dialog
              open={this.state.current_thread_state}
              onClose={event => this.setState({current_thread_state: false})}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth
              >
              <DialogTitle id="alert-dialog-title">{this.state.current_post.title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Content: {this.state.current_post.content}<br />
                  Author: {this.state.current_post.author}<br />
                  Type: {this.state.current_post.type}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={event => this.setState({current_thread_state:false})} color="primary">
                  ok
                </Button>
              </DialogActions>
            </Dialog>

          <ul className="forum_list">
            {toshow.map(
              forum =>
                <li className="grey_light_background" key={forum.forum_id} onClick={this.check_details.bind(this, forum)}>
                  <div id="title" className={`blue_heavy_text ${title}`} >{forum.title}</div>
                  <div id="author" className={`blue_heavy_text ${content}`}>Author: {forum.author}</div>
                  <div id="date" className={`blue_medium_text ${content}`}>
                    Post Date: {forum.date.toLocaleString()}
                  </div>
                </li>
              )
            }
          </ul>

        </div>
        
      </div>
    );
  }
}
 
export default withStyles(useStyles)(Forum);
